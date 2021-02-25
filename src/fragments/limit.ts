import { FragmentBase } from '@fragment-base'

export function LIMIT(limit: number): Limit {
  return new Limit(limit)
}

export class Limit extends FragmentBase {
  constructor(public limit: number) {
    super()
  }

  build() {
    return `LIMIT ${this.limit}`
  }
}
