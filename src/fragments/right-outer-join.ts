import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function RIGHT_OUTER_JOIN(table: string): RightOuterJoin {
  return new RightOuterJoin(table)
}

export class RightOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table))

    return `RIGHT OUTER JOIN ${this.table}`
  }
}
