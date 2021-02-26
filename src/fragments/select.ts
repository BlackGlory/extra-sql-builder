import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function SELECT(...fields: Array<string | Falsy>): Select {
  return new Select(fields.filter(isntFalsy))
}

export class Select extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.fields))
    assert(this.fields.every(isntEmptyString))

    return `SELECT ${this.fields.join(', ')}`
  }
}
