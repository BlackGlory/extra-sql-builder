import { assert, isntFalsy, Falsy } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function INSERT_INTO(table: string, fields: Array<string | Falsy>): string {
  const truthyFields = fields.filter(isntFalsy)

  assert(isntEmptyString(table), 'table should not be an empty string')
  assert(isntEmptyArray(truthyFields), 'fields should not be empty')
  assert(truthyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `INSERT INTO ${table} (${truthyFields.join(', ')})`
}
