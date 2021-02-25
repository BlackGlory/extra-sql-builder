import { FragmentBase } from '@fragment-base'

export function UPDATE(table: string): Update {
  return new Update(table)
}

export class Update extends FragmentBase {
  constructor(public table: string) {
    super()
  }

  build() {
    return `UPDATE ${this.table}`
  }
}
