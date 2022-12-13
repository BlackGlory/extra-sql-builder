import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { isntFalsy } from '@blackglory/types'
import { Falsy } from 'justypes'
import { FragmentBase } from './fragment-base'

export function INSERT_INTO(table: string, fields: Array<string | Falsy>): InsertInto {
  return new InsertInto(table, fields.filter(isntFalsy))
}

export class InsertInto extends FragmentBase {
  constructor(public table: string, public fields: string[]) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table), 'table should not be an empty string')
    assert(isntEmptyArray(this.fields), 'fields should not be empty')
    assert(this.fields.every(isntEmptyString), 'fields should not contain empty strings')

    return `INSERT INTO ${this.table} (${this.fields.join(', ')})`
  }
}
