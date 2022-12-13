import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from './fragment-base'

export function FULL_OUTER_JOIN(table: string): FullOuterJoin {
  return new FullOuterJoin(table)
}

export class FullOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table), 'table should not be an empty string')

    return `FULL OUTER JOIN ${this.table}`
  }
}
