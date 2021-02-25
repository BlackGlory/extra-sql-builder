import { FragmentBase } from '@fragment-base'

export function WHERE(condition: string): Where {
  return new Where(condition)
}

export class Where extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    return `WHERE ${this.condition}`
  }
}
