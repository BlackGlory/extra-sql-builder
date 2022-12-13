import { isntEmptyArray, isntEmptyString } from '@src/utils'
import { assert, Falsy, isntFalsy } from '@blackglory/prelude'

export function FROM(...tables: Array<string | Falsy>): string {
  const truthyTables = tables.filter(isntFalsy)

  assert(isntEmptyArray(truthyTables), 'tables should not be an empty array')
  assert(truthyTables.every(isntEmptyString), 'tables should not contain empty strings')

  return `FROM ${truthyTables.join(', ')}`
}
