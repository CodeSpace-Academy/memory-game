import * as types from "../../types";
import { createRandomizer } from "./Model.createRandomizer";
import { createBlankState } from "./Model.createBlankState";

describe("Model", () => {
  describe("createRandomizer", () => {
    test("get returns number", () => {
      const randomizer = createRandomizer();
      expect(typeof randomizer.get()).toEqual("number");
    });
  });

  describe("createBlankState", () => {
    const state = createBlankState();

    test("phase is start", () => {
      expect(state.phase).toEqual("start");
    });

    test("selected is null", () => {
      expect(state.selected).toEqual(null);
    });

    test("have six items", () => {
      expect(Object.keys(state.items).length).toEqual(6);
    });
  });
});
