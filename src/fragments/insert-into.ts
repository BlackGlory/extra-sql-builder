import { assert, isntFalsy, Falsy, isntEmptyArray } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils.js'

export function INSERT_INTO(table: string, fields: Array<string | Falsy>): string {
  assert(isntEmptyString(table), 'table should not be an empty string')

  const truthyFields = fields.filter(isntFalsy)
  assert(isntEmptyArray(truthyFields), 'fields should not be empty')
  assert(truthyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `INSERT INTO ${table} (${truthyFields.join(', ')})`
}
