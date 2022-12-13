import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { isntFalsy } from '@blackglory/types'
import { FragmentBase } from './fragment-base'
import { Falsy } from 'justypes'

export function GROUP_BY(...fields: Array<string | Falsy>): GroupBy {
  return new GroupBy(fields.filter(isntFalsy))
}

export class GroupBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.fields), 'fields should not be empty')
    assert(this.fields.every(isntEmptyString), 'fields should not contain empty strings')

    return `GROUP BY ${this.fields.join(', ')}`
  }
}
