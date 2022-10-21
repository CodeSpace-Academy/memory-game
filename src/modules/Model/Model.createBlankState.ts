import * as types from "../../types";
import { createRandomizer } from "./Model.createRandomizer";

export const createBlankState = (): types.state => {
  const randomizer = createRandomizer();

  const createItem = (id: number): types.item => ({
    id,
    type: "item",
    value: randomizer.get(),
    status: "hidden",
  });

  return {
    phase: "start",
    selected: null,
    items: {
      1: createItem(1),
      2: createItem(2),
      3: createItem(3),
      4: createItem(4),
      5: createItem(5),
      6: createItem(6),
    },
  };
};

export default createBlankState;
