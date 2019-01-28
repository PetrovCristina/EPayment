import get from "lodash.get";

import en from "./en.json";

export function l10n(key) {
  return get(en, key, key);
}
