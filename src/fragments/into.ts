import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function INTO(table: string): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  return `INTO ${table}`
}
