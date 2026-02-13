import { assert } from '@blackglory/prelude'
import { isntNegative } from '@src/utils'

export function OFFSET(offset: number): string {
  assert(
    Number.isInteger(offset) && isntNegative(offset)
  , 'offset should be a non-negative integer'
  )

  return `OFFSET ${offset}`
}
