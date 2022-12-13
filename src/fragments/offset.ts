import { assert } from '@blackglory/prelude'
import { isntNegative } from '@src/utils'

export function OFFSET(offset: number): string {
  assert(Number.isInteger(offset), 'offset should be an integer')
  assert(isntNegative(offset), 'offset should be positive')

  return `OFFSET ${offset}`
}
