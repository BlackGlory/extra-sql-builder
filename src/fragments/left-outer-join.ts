import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function LEFT_OUTER_JOIN(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `LEFT OUTER JOIN ${table}`
}
