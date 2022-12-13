import { isntEmptyString } from '@src/utils'
import { assert } from '@blackglory/prelude'

export function DELETE_FROM(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `DELETE FROM ${table}`
}
