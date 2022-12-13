import { assert, isntFalsy, Falsy } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function ORDER_BY(...fields: Array<string | Falsy>): string {
  const truhtyFields = fields.filter(isntFalsy)

  assert(isntEmptyArray(truhtyFields), 'fields should not be empty')
  assert(truhtyFields.every(isntEmptyString), 'fields should not contain empty strings')

  return `ORDER BY ${truhtyFields.join(', ')}`
}
