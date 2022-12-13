import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from './fragment-base'

export function INNER_JOIN(table: string): InnerJoin {
  return new InnerJoin(table)
}

export class InnerJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table), 'table should not be an empty string')

    return `INNER JOIN ${this.table}`
  }
}
