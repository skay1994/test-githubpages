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
});
