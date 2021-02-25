import { FragmentBase } from '@fragment-base'

export function ORDER_BY(...fields: string[]): OrderBy {
  return new OrderBy(fields)
}

export class OrderBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `ORDER BY ${this.fields.join(', ')}`
  }
}
