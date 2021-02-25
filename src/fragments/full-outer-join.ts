import { FragmentBase } from '@fragment-base'

export function FULL_OUTER_JOIN(table: string): FullOuterJoin {
  return new FullOuterJoin(table)
}

export class FullOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `FULL OUTER JOIN ${this.table}`
  }
}
