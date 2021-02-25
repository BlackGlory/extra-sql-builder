import { FragmentBase } from '@fragment-base'

export function ON(condition: string): On {
  return new On(condition)
}

export class On extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build() {
    return `ON ${this.condition}`
  }
}
