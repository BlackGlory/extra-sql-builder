import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { isntFalsy } from '@blackglory/types'
import { FragmentBase } from './fragment-base'
import { Falsy } from 'justypes'

export function SELECT(...fields: Array<string | Falsy>): Select {
  return new Select(fields.filter(isntFalsy))
}

export class Select extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.fields), 'fields should not be empty')
    assert(this.fields.every(isntEmptyString), 'fields should not contain empty strings')

    return `SELECT ${this.fields.join(', ')}`
  }
}
