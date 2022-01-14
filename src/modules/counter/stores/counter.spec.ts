import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "./counter";

describe("Counter Store", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it("increments by amount", () => {
    const counter = useCounterStore();
    counter.increment(10);
    expect(counter.count).toBe(10);
  });
});
