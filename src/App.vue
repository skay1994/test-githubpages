<template>
  <header>
    <img alt="ícone rocketpay" src="./assets/svgs/logo.svg" />
  </header>
  <Card
    :cardHolder="cardHolder"
    :cardNumber="cardNumber"
    :expirationDate="expirationDate"
    :securityCode="securityCode"
    :type="type"
  />
  <CardForm
    @cardHolder="cardHolderListener"
    @cardNumber="cardNumberListener"
    @cardType="cardTypeListener"
    @expirationDate="expirationDateListener"
    @securityCode="securityCodeListener"
  />
</template>
<script lang="ts">
import CardForm from "./components/CardForm.vue";
import Card from "./components/Card.vue";

export default {
  data() {
    return {
      type: "default",
      cardNumber: "1234 5678 9012 3456",
      cardNumberDefault: "1234 5678 9012 3456",
      cardHolder: "FULANO DA SILVA",
      cardHolderDefault: "FULANO DA SILVA",
      expirationDate: "02/32",
      expirationDateDefault: "02/32",
      securityCode: "123",
      securityCodeDefault: "123",
    };
  },
  methods: {
    cardTypeListener(type: string) {
      this.type = type;
    },
    cardNumberListener(number: string) {
      this.cardNumber = number.length === 0 ? this.cardNumberDefault : number;
    },
    cardHolderListener(value: string) {
      this.cardHolder = value.length === 0 ? this.cardHolderDefault : value;
    },
    expirationDateListener(value: string) {
      this.expirationDate =
        value.length === 0 ? this.expirationDateDefault : value;
    },
    securityCodeListener(value: string) {
      this.securityCode = value.length === 0 ? this.securityCodeDefault : value;
    },
  },
  components: { CardForm, Card },
};
</script>
