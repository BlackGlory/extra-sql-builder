import { FragmentBase } from '@fragment-base'

export function SELECT(...fields: string[]): Select {
  return new Select(fields)
}

export class Select extends FragmentBase {
  constructor(public fields: string[]) {
    super()
  }

  build() {
    return `SELECT ${this.fields.join(', ')}`
  }
}
