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
});
