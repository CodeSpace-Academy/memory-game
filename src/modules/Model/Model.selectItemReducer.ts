import * as types from "../../types";
import { toggleFlipped } from "./Model.toggleFlipped";

export const selectItemReducer =
  (id: number) =>
  (state: types.state): types.state => {
    if (state.selected === id) return state;

    switch (state.phase) {
      case "start":
        return {
          ...state,
          phase: "selecting",
          items: toggleFlipped(state.items, id),
        };

      case "selecting": {
        if (!state.selected) throw new Error('"selected" is required');
        const selectedValue = state.items[state.selected].value;
        const idValue = state.items[id].value;

        if (selectedValue !== idValue) {
          return {
            ...state,
            phase: "no-match",
            items: toggleFlipped(state.items, id),
          };
        }

        return {
          ...state,
          phase: "match",
          items: {
            ...state.items,
            [state.selected]: {
              ...state.items[state.selected],
              status: "matched",
            },
            [id]: {
              ...state.items[id],
              status: "matched",
            },
          },
        };
      }

      case "no-match": {
        const clearedItems = Object.entries(state.items).reduce(
          (result, [key, singleItem]) => {
            if (singleItem.status !== "flipped")
              return {
                ...result,
                [key]: singleItem,
              };

            return {
              ...singleItem,
              status: "hidden",
            };
          },
          {}
        );

        return {
          ...state,
          phase: "no-match",
          items: toggleFlipped(clearedItems, id),
        };
      }

      case "start":
        return {
          ...state,
          phase: "selecting",
          items: toggleFlipped(state.items, id),
        };

      case "finished":
        return state;

      default:
        throw new Error("Invalid phase");
    }
  };

export default selectItemReducer;
