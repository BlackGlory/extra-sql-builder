import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function INNER_JOIN(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `INNER JOIN ${table}`
}
