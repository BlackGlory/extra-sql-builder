import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function GROUP_BY(...fields: Array<string | Falsy>): GroupBy {
  return new GroupBy(fields.filter(isntFalsy))
}

export class GroupBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.fields))
    assert(this.fields.every(isntEmptyString))

    return `GROUP BY ${this.fields.join(', ')}`
  }
}
