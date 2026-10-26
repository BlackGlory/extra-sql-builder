import { isntEmptyString } from '@src/utils.js'
import { assert, Falsy, isntFalsy, isntEmptyArray } from '@blackglory/prelude'

export function FROM(...tables: Array<string | Falsy>): string {
  const truthyTables = tables.filter(isntFalsy)
  assert(isntEmptyArray(truthyTables), 'tables should not be an empty array')
  assert(truthyTables.every(isntEmptyString), 'tables should not contain empty strings')

  return `FROM ${truthyTables.join(', ')}`
}
