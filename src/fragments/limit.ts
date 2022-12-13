import { assert } from '@blackglory/errors'
import { isntNegative } from '@utils'
import { FragmentBase } from './fragment-base'

export function LIMIT(limit: number): Limit {
  return new Limit(limit)
}

export class Limit extends FragmentBase {
  constructor(public limit: number) {
    super()
  }

  build() {
    assert(Number.isInteger(this.limit), 'limit should be an integer')
    assert(isntNegative(this.limit), 'limit should be positive')

    return `LIMIT ${this.limit}`
  }
}
