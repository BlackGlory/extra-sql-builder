import { isNull, isUndefined } from '@blackglory/types'
import { text } from '@values/text'

export function json(val: object): string {
  return text(JSON.stringify(val))
}

export function nullableJson(val: object | null | undefined): string {
  if (isNull(val) || isUndefined(val)) {
    return 'NULL'
  } else {
    return json(val)
  }
}
