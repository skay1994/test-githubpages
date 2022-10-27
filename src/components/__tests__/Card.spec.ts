import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import Card from "../Card.vue";

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
});
