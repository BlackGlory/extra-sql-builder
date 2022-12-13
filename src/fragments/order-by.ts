import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { isntFalsy } from '@blackglory/types'
import { FragmentBase } from './fragment-base'
import { Falsy } from 'justypes'

export function ORDER_BY(...fields: Array<string | Falsy>): OrderBy {
  return new OrderBy(fields.filter(isntFalsy))
}

export class OrderBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.fields), 'fields should not be empty')
    assert(this.fields.every(isntEmptyString), 'fields should not contain empty strings')

    return `ORDER BY ${this.fields.join(', ')}`
  }
}
