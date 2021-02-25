import { FragmentBase } from '@fragment-base'

export function DELETE_FROM(table: string): DeleteFrom {
  return new DeleteFrom(table)
}

export class DeleteFrom extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `DELETE FROM ${this.table}`
  }
}
