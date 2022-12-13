import { assert } from '@blackglory/errors'
import { isntNegative } from '@utils'
import { FragmentBase } from './fragment-base'

export function OFFSET(offset: number): Offset {
  return new Offset(offset)
}

export class Offset extends FragmentBase {
  constructor(public offset: number) {
    super()
  }

  build() {
    assert(Number.isInteger(this.offset), 'offset should be an integer')
    assert(isntNegative(this.offset), 'offset should be positive')

    return `OFFSET ${this.offset}`
  }
}
