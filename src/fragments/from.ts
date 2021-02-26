import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function FROM(...tables: Array<string | Falsy>): From {
  return new From(tables.filter(isntFalsy))
}

export class From extends FragmentBase {
  constructor(public tables: string[]) {
    super()
  }

  build(): string {
    assert(isntEmptyArray(this.tables))
    assert(this.tables.every(isntEmptyString))

    return `FROM ${this.tables.join(', ')}`
  }
}
