import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function OR(condition: string): Or {
  return new Or(condition)
}

export class Or extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.condition), 'condition should not be an empty string')

    return `OR ${this.condition}`
  }
}
