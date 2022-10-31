<template>
  <form action="">
    <div class="input-wrapper">
      <label for="card-number">Número do cartão</label>
      <input
        id="card-number"
        v-imask="cardNumberPattern"
        @accept="creditCardAccept"
      />
    </div>

    <div class="input-wrapper">
      <label for="card-holder">Nome do titular</label>
      <input id="card-holder" v-model="holder" @input="cardHolder" />
    </div>

    <div class="flex">
      <div class="input-wrapper">
        <label for="expiration-date">Expiração</label>
        <input
          id="expiration-date"
          v-imask="expirationDatePattern"
          @accept="expirationDate"
        />
      </div>

      <div class="input-wrapper">
        <label for="security-code">CVC</label>
        <input
          id="security-code"
          v-imask="securityCodePattern"
          @accept="securityCode"
        />
      </div>
    </div>

    <button id="add-card" type="button">ADICIONAR CARTÃO</button>
  </form>
</template>
<script lang="ts">
// @ts-ignore
import { IMask, IMaskDirective } from "vue-imask";

export default {
  emits: [
    "cardType",
    "cardNumber",
    "cardHolder",
    "expirationDate",
    "securityCode",
  ],
  data() {
    const currentYear = String(new Date().getFullYear()).slice(2);
    const nextTeenYears = String(new Date().getFullYear() + 10).slice(2);

    return {
      holder: "",
      expirationDatePattern: {
        mask: "MM{/}YY",
        blocks: {
          YY: {
            mask: IMask.MaskedRange,
            from: currentYear,
            to: nextTeenYears,
          },
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
          },
        },
      },
      securityCodePattern: {
        mask: "0000",
      },
      cardNumberPattern: {
        mask: [
          {
            mask: "0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardType: "visa",
          },
          {
            mask: "0000 0000 0000 0000",
            regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
            cardType: "mastercard",
          },
          {
            mask: "0000 0000 0000 0000",
            cardType: "default",
          },
        ],
        dispatch: (appended: string, dynamicMasked: any) => {
          const number = (dynamicMasked.value + appended).replace(/^D/g, "");
          return dynamicMasked.compiledMasks.find(function (item: any) {
            return number.match(item.regex);
          });
        },
      },
    };
  },
  methods: {
    creditCardAccept(event: any) {
      this.$emit("cardType", event.detail.masked.currentMask.cardType);
      this.$emit("cardNumber", event.detail.masked.currentMask.typedValue);
    },
    cardHolder() {
      this.$emit("cardHolder", this.holder);
    },
    expirationDate(event: any) {
      this.$emit("expirationDate", event.detail.value);
    },
    securityCode(event: any) {
      this.$emit("securityCode", event.detail.value);
    },
  },
  directives: {
    imask: IMaskDirective,
  },
};
</script>
<style scoped>
form {
  max-width: 36rem;
  display: grid;
  gap: 1.6rem;
}

form .input-wrapper {
  display: grid;
  gap: 0.6rem;
}

form label {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.01px;
  text-transform: uppercase;
  color: #e1e1e6;
}

form input {
  background: #121214;
  border: 1px solid #323238;
  border-radius: 6px;
  height: 41px;
  padding-inline: 1.2rem;

  width: 100%;

  color: white;
  text-transform: uppercase;
}

form .flex {
  gap: 1.4rem;
}

form .flex .input-wrapper {
  flex: 1;
}

form button {
  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0;

  background: #42d3ff;
  border-radius: 0.6rem;

  cursor: pointer;

  border: none;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #121212;

  transition: filter 0.3s;
}

form button:hover {
  filter: brightness(1.1);
}
</style>
