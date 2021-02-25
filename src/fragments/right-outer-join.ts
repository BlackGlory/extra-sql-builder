import { FragmentBase } from '@fragment-base'

export function RIGHT_OUTER_JOIN(table: string): RightOuterJoin {
  return new RightOuterJoin(table)
}

export class RightOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `RIGHT OUTER JOIN ${this.table}`
  }
}
