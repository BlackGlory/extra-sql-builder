import { assert, isntFalsy, Falsy, isntEmptyArray } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils.js'

export function SELECT(...fields: Array<string | Falsy>): string {
  const truthyFields = fields.filter(isntFalsy)
  assert(isntEmptyArray(truthyFields), 'fields should not be empty')
  assert(truthyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `SELECT ${truthyFields.join(', ')}`
}
