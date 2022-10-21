import * as types from "../../types";
import { createBlankState } from "./Model.createBlankState";
import { selectItemReducer } from "./Model.selectItemReducer";

export class Model {
  state: types.state = createBlankState();

  onUpdate(prev: types.state, next: types.state) {
    throw new Error('"onUpdate" callback is required on Model class');
  }

  manipulate(change: (state: types.state) => types.state) {
    const prev = { ...this.state };
    const next = change(prev);
    this.onUpdate(prev, next);
  }

  selectItem(id: number) {
    this.manipulate(selectItemReducer(id));
  }

  reset() {
    if (this.state.phase === "start") return;
    this.manipulate(createBlankState);
  }
}

export default Model;
