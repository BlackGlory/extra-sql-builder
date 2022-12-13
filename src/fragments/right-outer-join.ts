import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function RIGHT_OUTER_JOIN(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `RIGHT OUTER JOIN ${table}`
}
