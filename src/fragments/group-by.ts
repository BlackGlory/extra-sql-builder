import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function GROUP_BY(...fields: Array<string | Falsy>): GroupBy {
  return new GroupBy(fields.filter(isntFalsy))
}

export class GroupBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `GROUP BY ${this.fields.join(', ')}`
  }
}
