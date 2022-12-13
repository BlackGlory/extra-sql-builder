import { isNull, isUndefined } from '@blackglory/prelude'
import { assert } from '@blackglory/prelude'

export function integer(val: number): string {
  assert(Number.isInteger(val), 'The passed value should be a integer')

  return `${val}`
}

export function nullableInteger(val: number | null | undefined): string {
  if (isNull(val) || isUndefined(val)) {
    return 'NULL'
  } else {
    return integer(val)
  }
}
