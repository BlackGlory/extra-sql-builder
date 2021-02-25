import { FragmentBase } from '@fragment-base'

export function SET(...statements: string[]): Set {
  return new Set(statements)
}

export class Set extends FragmentBase {
  constructor(public statements: string[]) {
    super()
  }

  build() {
    return `SET ${this.statements.join(', ')}`
  }
}
