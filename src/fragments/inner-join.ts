import { FragmentBase } from '@fragment-base'

export function INNER_JOIN(table: string): InnerJoin {
  return new InnerJoin(table)
}

export class InnerJoin extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `INNER JOIN ${this.table}`
  }
}
