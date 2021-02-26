import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function ORDER_BY(...fields: Array<string | Falsy>): OrderBy {
  return new OrderBy(fields.filter(isntFalsy))
}

export class OrderBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `ORDER BY ${this.fields.join(', ')}`
  }
}
