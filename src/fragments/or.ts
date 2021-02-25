import { FragmentBase } from '@fragment-base'

export function OR(condition: string): Or {
  return new Or(condition)
}

export class Or extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    return `OR ${this.condition}`
  }
}
