export type phase = "start" | "selecting" | "no-match" | "match" | "finished";
export type itemId = number;

export type item = {
  id: itemId;
  type: "item";
  value: number;
  status: "hidden" | "flipped" | "matched";
};

export type itemsCollection = Record<itemId, item>;

export type state = {
  phase: phase;
  selected: null | itemId;
  items: itemsCollection;
};
