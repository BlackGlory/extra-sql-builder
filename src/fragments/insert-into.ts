import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function INSERT_INTO(table: string, fields: Array<string | Falsy>): InsertInto {
  return new InsertInto(table, fields.filter(isntFalsy))
}

export class InsertInto extends FragmentBase {
  constructor(public table: string, public fields: string[]) {
    super()
  }

  build() {
    return `INSERT INTO ${this.table} (${this.fields.join(', ')})`
  }
}
