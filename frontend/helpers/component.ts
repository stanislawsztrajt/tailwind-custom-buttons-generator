import { returnGetValueObjectByStringKey } from "types/types";

export const getValueObjectByStringKey: returnGetValueObjectByStringKey = (part, object) =>
  Object.entries(object).find(([key]) => {
    return key.startsWith(part);
  })?.[1];
