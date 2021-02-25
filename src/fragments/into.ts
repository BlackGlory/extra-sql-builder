import { FragmentBase } from '@fragment-base'

export function INTO(table: string): Into {
  return new Into(table)
}

export class Into extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `INTO ${this.table}`
  }
}
