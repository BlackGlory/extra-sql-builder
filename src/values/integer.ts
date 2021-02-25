import { assert } from '@blackglory/errors'

export function integer(integer: number): string {
  assert(Number.isInteger(integer), 'The passed value should be a integer')
  return `${integer}`
}
