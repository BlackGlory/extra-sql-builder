import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { FragmentBase } from '@fragment-base'

export function SET(...statements: string[]): Set {
  return new Set(statements)
}

export class Set extends FragmentBase {
  constructor(public statements: string[]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.statements))
    assert(this.statements.every(isntEmptyString))

    return `SET ${this.statements.join(', ')}`
  }
}
