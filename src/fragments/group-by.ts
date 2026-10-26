import { assert, Falsy, isntEmptyArray, isntFalsy } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils.js'

export function GROUP_BY(...fields: Array<string | Falsy>): string {
  const truthyFields = fields.filter(isntFalsy)
  assert(isntEmptyArray(truthyFields), 'fields should not be empty')
  assert(truthyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `GROUP BY ${truthyFields.join(', ')}`
}
