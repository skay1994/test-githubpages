import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import CardForm from "../CardForm.vue";

describe("CardForm Tests", function () {
  it("renders properly", () => {
    const wrapper = mount(CardForm);

    expect(wrapper.find('[for="card-number"]').text()).toContain(
      "Número do cartão"
    );
    expect(wrapper.find('[for="card-holder"]').text()).toContain(
      "Nome do titular"
    );
    expect(wrapper.find('[for="expiration-date"]').text()).toContain(
      "Expiração"
    );
    expect(wrapper.find('[for="security-code"]').text()).toContain("CVC");
    expect(wrapper.find("#add-card").text()).toContain("ADICIONAR CARTÃO");
  });

  it("Set card number value", async () => {
    const wrapper = mount(CardForm);

    await wrapper.find('[id="card-number"]').setValue("4789878978979878");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().cardNumber).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().cardNumber[0][0]).toContain("4789 8789 7897 9878");
  });

  it("Set card holder value", async () => {
    const wrapper = mount(CardForm);
    const cardHolder = "Usuario Teste";

    await wrapper.find('[id="card-holder"]').setValue(cardHolder);
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().cardHolder).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().cardHolder[0][0]).toContain(cardHolder);
  });

  it("Set expiration date value", async () => {
    const wrapper = mount(CardForm);

    await wrapper.find('[id="expiration-date"]').setValue("1225");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().expirationDate).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().expirationDate[0][0]).toContain("12/25");
  });

  it("Set security code value", async () => {
    const wrapper = mount(CardForm);

    await wrapper.find('[id="security-code"]').setValue("12255");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().securityCode).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().securityCode[0][0]).toContain("1225");
  });
});
