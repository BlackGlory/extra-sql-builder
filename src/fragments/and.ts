import { FragmentBase } from '@fragment-base'

export function AND(condition: string): And {
  return new And(condition)
}

export class And extends FragmentBase {
  constructor(public condition: string) {
    super()
  }

  build(): string {
    return `AND ${this.condition}`
  }
}
