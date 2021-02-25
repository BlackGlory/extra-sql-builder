import { FragmentBase } from '@fragment-base'

export function GROUP_BY(...fields: string[]): GroupBy {
  return new GroupBy(fields)
}

export class GroupBy extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `GROUP BY ${this.fields.join(', ')}`
  }
}
