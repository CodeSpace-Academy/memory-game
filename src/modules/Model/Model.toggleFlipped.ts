import * as types from "../../types";

export const toggleFlipped = (
  items: types.itemsCollection,
  key: number
): types.itemsCollection => {
  return {
    ...items,
    [key]: {
      ...items[key],
      status: "flipped",
    },
  };
};

export default toggleFlipped;
