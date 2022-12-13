import { isNullish, Nullable } from '@blackglory/prelude'
import { text } from '@values/text'

export function json(val: object): string {
  return text(JSON.stringify(val))
}

export function nullableJson(val: Nullable<object>): string {
  return isNullish(val)
       ? 'NULL'
       : json(val)
}
