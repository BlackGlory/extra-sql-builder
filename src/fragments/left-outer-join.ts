import { FragmentBase } from '@fragment-base'

export function LEFT_OUTER_JOIN(table: string): LeftOuterJoin {
  return new LeftOuterJoin(table)
}

export class LeftOuterJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `LEFT OUTER JOIN ${this.table}`
  }
}
