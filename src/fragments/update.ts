import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function UPDATE(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `UPDATE ${table}`
}
