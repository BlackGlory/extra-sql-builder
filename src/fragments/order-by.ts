import { assert, isntFalsy, Falsy } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function ORDER_BY(...fields: Array<string | Falsy>): string {
  const truthyFields = fields.filter(isntFalsy)
  assert(isntEmptyArray(truthyFields), 'fields should not be empty')
  assert(truthyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `ORDER BY ${truthyFields.join(', ')}`
}
