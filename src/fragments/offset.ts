import { assert } from '@blackglory/errors'
import { isntNegative } from '@utils'
import { FragmentBase } from '@fragment-base'

export function OFFSET(offset: number): Offset {
  return new Offset(offset)
}

export class Offset extends FragmentBase {
  constructor(public offset: number) {
    super()
  }

  build() {
    assert(Number.isInteger(this.offset))
    assert(isntNegative(this.offset))

    return `OFFSET ${this.offset}`
  }
}
