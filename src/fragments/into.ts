import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function INTO(table: string): Into {
  return new Into(table)
}

export class Into extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table))

    return `INTO ${this.table}`
  }
}
