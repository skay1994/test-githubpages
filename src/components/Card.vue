<template>
  <section class="cc">
    <div class="cc-bg">
      <svg
        fill="none"
        height="230"
        viewBox="0 0 360 230"
        width="360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3_2547"
          height="230"
          maskUnits="userSpaceOnUse"
          style="mask-type: alpha"
          width="360"
          x="0"
          y="0"
        >
          <rect fill="#16084C" height="230" rx="15.4011" width="360" />
        </mask>
        <g mask="url(#mask0_3_2547)">
          <g filter="url(#filter0_f_3_2547)">
            <path
              :fill="firstColor"
              d="M451.518 -135.506C473.881 -89.3531 414.166 -13.4917 318.142 33.9349C222.118 81.3615 126.147 82.3939 103.784 36.2409C81.4215 -9.91221 141.136 -85.7735 237.16 -133.2C333.184 -180.627 429.156 -181.659 451.518 -135.506Z"
            />
          </g>
          <g filter="url(#filter1_f_3_2547)">
            <path
              :fill="secondaryColor"
              d="M399.134 -169.756C421.497 -123.603 361.783 -47.742 265.758 -0.315356C169.734 47.1113 73.7629 48.1437 51.4003 1.99062C29.0377 -44.1624 88.7521 -120.024 184.776 -167.45C280.8 -214.877 376.772 -215.909 399.134 -169.756Z"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_3_2547"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="351.306"
            width="468.777"
            x="43.2629"
            y="-225.286"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_3_2547"
              stdDeviation="27.9144"
            />
          </filter>
          <filter
            id="filter1_f_3_2547"
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="351.306"
            width="468.777"
            x="-9.12087"
            y="-259.536"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_3_2547"
              stdDeviation="27.9144"
            />
          </filter>
        </defs>
      </svg>
    </div>

    <div class="cc-logo">
      <span>
        <img alt="ícone padrão de cartão" src="src/assets/svgs/cc-icon.svg" />
      </span>
      <span>
        <img
          :src="`src/assets/svgs/cc-${type}.svg`"
          alt="ícone do cartão de crédito selecionado"
        />
      </span>
    </div>

    <div class="cc-info">
      <div class="cc-number" v-text="cardNumber" />

      <div class="cc-holder">
        <div class="label">Nome do titular</div>
        <div class="value" v-text="cardHolder" />
      </div>

      <div class="cc-extra">
        <div class="cc-expiration">
          <div class="label">Expiração</div>
          <div class="value" v-text="expirationDate" />
        </div>
        <div class="cc-security">
          <div class="label">CVC</div>
          <div class="value" v-text="securityCode" />
        </div>
        <img
          alt="ícone de chip de cartão de crédito"
          src="src/assets/svgs/cc-chip.svg"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
const types = ["default", "visa", "mastercard"];
export const colors = {
  visa: ["#436D99", "#2D57F2"],
  mastercard: ["#DF6F29", "#C69347"],
  default: ["black", "gray"],
};

export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator: (type: string) => types.includes(type.toLowerCase()),
    },
    cardNumber: {
      type: String,
      default: "1234 5678 9012 3456",
    },
    cardHolder: {
      type: String,
      default: "FULANO DA SILVA",
    },
    expirationDate: {
      type: String,
      default: "02/32",
    },
    securityCode: {
      type: String,
      default: "123",
    },
  },
  computed: {
    firstColor(): string {
      if (types.includes(this.type)) return colors[this.type][0];

      return colors.default[0];
    },
    secondaryColor(): string {
      if (types.includes(this.type)) return colors[this.type][1];

      return colors.default[1];
    },
  },
};
</script>

<style scoped>
/* CC */
.cc {
  background: url("src/assets/svgs/cc-bg.svg") no-repeat center;
  width: 36rem;
  height: 23rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cc-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cc-info {
  display: grid;
  gap: 1.4rem;
}

.cc-number {
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 2.9rem;
  letter-spacing: 0.04em;

  color: #e8e8e8;
  text-shadow: 0 0.12rem 0.32rem rgb(23 23 23 / 40%);
}

.cc-holder,
.cc-expiration,
.cc-security {
  display: grid;
  gap: 0.4rem;
}

.cc .label {
  font-size: 1rem;
  line-height: 1.2rem;
}

.cc .value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0.25rem 0.25rem rgb(22 22 22 / 16%);
  text-transform: uppercase;
}

.cc-extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cc,
.cc-logo,
.cc-number {
  position: relative;
}

.cc-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
