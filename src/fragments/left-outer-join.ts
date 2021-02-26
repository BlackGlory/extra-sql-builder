import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function LEFT_OUTER_JOIN(table: string): LeftOuterJoin {
  return new LeftOuterJoin(table)
}

export class LeftOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table))

    return `LEFT OUTER JOIN ${this.table}`
  }
}
