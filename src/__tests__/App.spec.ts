import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Card from "../components/Card.vue";
import CardForm from "../components/CardForm.vue";
import App from "../App.vue";

describe("App Tests", function () {
  it("renders properly", () => {
    const wrapper = mount(App);

    expect(wrapper.findComponent(Card).isVisible()).true;
    expect(wrapper.findComponent(CardForm).isVisible()).true;
  });

  it("Change card number to visa brand", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const cardInfo = card.find(".cc-info");
    const form = wrapper.findComponent(CardForm);
    const cardNumber = "4789 8789 7897 9878";

    await form.find('[id="card-number"]').setValue(cardNumber);
    await wrapper.vm.$nextTick();

    expect(card.props("type")).toContain("visa");
    expect(cardInfo.find(".cc-number").text()).toContain(cardNumber);
  });

  it("Change card number to mastercard brand", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const form = wrapper.findComponent(CardForm);

    const cardInfo = card.find(".cc-info");
    const cardNumber = "5548 7897 8945 2143";

    await form.find('[id="card-number"]').setValue(cardNumber);
    await wrapper.vm.$nextTick();

    expect(card.props("type")).toContain("mastercard");
    expect(cardInfo.find(".cc-number").text()).toContain(cardNumber);
  });

  it("Change card number to default brand", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const form = wrapper.findComponent(CardForm);

    const cardInfo = card.find(".cc-info");
    const cardNumber = "9999 9999 9999 9999";

    await form.find('[id="card-number"]').setValue(cardNumber);
    await wrapper.vm.$nextTick();

    expect(card.props("type")).toContain("default");
    expect(cardInfo.find(".cc-number").text()).toContain(cardNumber);
  });

  it("Change card holder", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const form = wrapper.findComponent(CardForm);

    const cardInfo = card.find(".cc-info");
    const cardHolder = "FULANO DA COSTA";

    await form.find('[id="card-holder"]').setValue(cardHolder);
    await wrapper.vm.$nextTick();

    expect(cardInfo.find(".cc-holder .value").text()).toContain(cardHolder);
  });

  it("Change card expiration date", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const form = wrapper.findComponent(CardForm);

    const cardInfo = card.find(".cc-info");
    const cardHolder = "12/25";

    await form.find('[id="expiration-date"]').setValue(cardHolder);
    await wrapper.vm.$nextTick();

    expect(cardInfo.find(".cc-expiration .value").text()).toContain(cardHolder);
  });

  it("Change card security code", async () => {
    const wrapper = mount(App);
    const card = wrapper.findComponent(Card);
    const form = wrapper.findComponent(CardForm);

    const cardInfo = card.find(".cc-info");
    const securityCode = "1225";

    await form.find('[id="security-code"]').setValue(securityCode);
    await wrapper.vm.$nextTick();

    expect(cardInfo.find(".cc-security .value").text()).toContain(securityCode);
  });
});
