import { assert } from '@blackglory/errors'
import { isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function UPDATE(table: string): Update {
  return new Update(table)
}

export class Update extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table))

    return `UPDATE ${this.table}`
  }
}
