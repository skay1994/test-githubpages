import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Card, { colors } from "../Card.vue";

describe("Card Component Tests", function () {
  it("renders properly", () => {
    const wrapper = mount(Card);
    const ccInfo = wrapper.find(".cc-info");

    expect(ccInfo.find(".cc-number").text()).toContain("1234 5678 9012 3456");
    expect(ccInfo.find(".cc-holder .value").text()).toContain(
      "FULANO DA SILVA"
    );
    expect(ccInfo.find(".cc-expiration .value").text()).toContain("02/32");
    expect(ccInfo.find(".cc-security .value").text()).toContain("123");
    expect(ccInfo.find(".cc-extra img").attributes()["src"]).toContain(
      "src/assets/svgs/cc-chip.svg"
    );
  });

  it("Change card number value", () => {
    const cardNumber = "4568 7894 1234 7894";
    const wrapper = mount(Card, {
      props: { cardNumber },
    } as any);
    const ccNumber = wrapper.find(".cc-info .cc-number");

    expect(ccNumber.text()).toContain(cardNumber);
  });

  it("Change card holder value", () => {
    const cardHolder = "Nome Teste";
    const wrapper = mount(Card, {
      props: { cardHolder },
    } as any);
    const ccHolder = wrapper.find(".cc-holder .value");

    expect(ccHolder.text()).toContain(cardHolder);
  });

  it("Change expiration date value", () => {
    const expirationDate = "11/25";
    const wrapper = mount(Card, {
      props: { expirationDate },
    } as any);
    const ccExpirationDate = wrapper.find(".cc-extra .value");

    expect(ccExpirationDate.text()).toContain(expirationDate);
  });

  it("Change security code value", () => {
    const securityCode = "11/25";
    const wrapper = mount(Card, {
      props: { securityCode },
    } as any);
    const ccSecurityCode = wrapper.find(".cc-security .value");

    expect(ccSecurityCode.text()).toContain(securityCode);
  });

  it("Change card type as default", () => {
    const type = "default";
    const wrapper = mount(Card, {
      props: { type },
    } as any);
    const logo = wrapper.find(".cc-logo span:nth-child(2) img");
    const color1 = wrapper.find(".cc-bg svg > g g:nth-child(1) path");
    const color2 = wrapper.find(".cc-bg svg > g g:nth-child(2) path");

    expect(logo.attributes()["src"]).toContain(
      "src/assets/svgs/cc-default.svg"
    );
    expect(color1.attributes("fill"), colors.default[0]);
    expect(color2.attributes("fill"), colors.default[1]);
  });

  it("Change card type as visa", () => {
    const type = "visa";
    const wrapper = mount(Card, {
      props: { type },
    } as any);
    const logo = wrapper.find(".cc-logo span:nth-child(2) img");
    const color1 = wrapper.find(".cc-bg svg > g g:nth-child(1) path");
    const color2 = wrapper.find(".cc-bg svg > g g:nth-child(2) path");

    expect(logo.attributes()["src"]).toContain("src/assets/svgs/cc-visa.svg");
    expect(color1.attributes("fill"), colors.visa[0]);
    expect(color2.attributes("fill"), colors.visa[1]);
  });

  it("Change card type as mastercard", () => {
    const type = "mastercard";
    const wrapper = mount(Card, {
      props: { type },
    } as any);
    const logo = wrapper.find(".cc-logo span:nth-child(2) img");
    const color1 = wrapper.find(".cc-bg svg > g g:nth-child(1) path");
    const color2 = wrapper.find(".cc-bg svg > g g:nth-child(2) path");

    expect(logo.attributes()["src"]).toContain(
      "src/assets/svgs/cc-mastercard.svg"
    );
    expect(color1.attributes("fill"), colors.mastercard[0]);
    expect(color2.attributes("fill"), colors.mastercard[1]);
  });

  it("Change card type with invalid type", () => {
    mount(Card, {
      props: { type: "invalid" },
      global: {
        config: {
          warnHandler(msg: string) {
            expect(
              msg,
              '[Vue warn]: Invalid prop: custom validator check failed for prop "type"'
            );
          },
        },
      },
    } as any);

    const validator = Card.props.type.validator;
    expect(validator("invalid")).toBeFalsy();
  });
});
