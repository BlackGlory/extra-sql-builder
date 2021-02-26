import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function SELECT(...fields: Array<string | Falsy>): Select {
  return new Select(fields.filter(isntFalsy))
}

export class Select extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `SELECT ${this.fields.join(', ')}`
  }
}
