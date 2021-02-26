import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function ON(condition: string): On {
  return new On(condition)
}

export class On extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.condition))

    return `ON ${this.condition}`
  }
}
