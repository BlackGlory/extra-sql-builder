import { FragmentBase } from '@fragment-base'

export function HAVING(condition: string): Having {
  return new Having(condition)
}

export class Having extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    return `HAVING ${this.condition}`
  }
}
