import { isntEmptyString } from '@utils'
import { assert } from '@blackglory/errors'
import { FragmentBase } from '@fragment-base'

export function AND(condition: string): And {
  return new And(condition)
}

export class And extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build(): string {
    assert(isntEmptyString(this.condition))

    return `AND ${this.condition}`
  }
}
