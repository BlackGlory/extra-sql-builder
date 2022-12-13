import { isNullish, Nullable } from '@blackglory/prelude'
import { assert } from '@blackglory/prelude'

export function integer(val: number): string {
  assert(Number.isInteger(val), 'The passed value should be a integer')

  return `${val}`
}

export function nullableInteger(val: Nullable<number>): string {
  return isNullish(val)
       ? 'NULL'
       : integer(val)
}
