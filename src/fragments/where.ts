import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function WHERE(condition: string): Where {
  return new Where(condition)
}

export class Where extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.condition), 'condition should not be an empty string')

    return `WHERE ${this.condition}`
  }
}
