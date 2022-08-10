import { isntEmptyString } from '@utils'
import { assert } from '@blackglory/errors'
import { FragmentBase } from '@fragment-base'

export function DELETE_FROM(table: string): DeleteFrom {
  return new DeleteFrom(table)
}

export class DeleteFrom extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    assert(isntEmptyString(this.table), 'table should not be an empty string')

    return `DELETE FROM ${this.table}`
  }
}
