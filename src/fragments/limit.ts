import { assert } from '@blackglory/errors'
import { isntNegative } from '@utils'
import { FragmentBase } from '@fragment-base'

export function LIMIT(limit: number): Limit {
  return new Limit(limit)
}

export class Limit extends FragmentBase {
  constructor(public limit: number) {
    super()
  }

  build() {
    assert(Number.isInteger(this.limit))
    assert(isntNegative(this.limit))

    return `LIMIT ${this.limit}`
  }
}
