import get from 'lodash.get'

import ro from './ro.json'

export function l10n(key) {
  return get(ro, key, key)
}
