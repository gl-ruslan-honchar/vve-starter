import { describe, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Counter from "./counter.vue";

import { setActivePinia, createPinia } from "pinia";
import { createApp } from "vue";

// you don't need to create one app per test
const app = createApp({});

describe("Counter component", async () => {
  beforeEach(() => {
    const pinia = createPinia()
    app.use(pinia);
    setActivePinia(pinia);
  });

  test("should mount the component", async () => {
    expect(Counter).toBeTruthy();

    const wrapper = mount(Counter);

    expect(wrapper.get('h1').text()).toContain("Simple Counter Test");
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should update counter text on button click", async () => {
    const wrapper = mount(Counter);

    expect(wrapper.get("span.count").text()).toContain(0);
    
    await wrapper.get("button").trigger("click");

    expect(wrapper.get("span.count").text()).toContain(1);
  });
});
