import { assert } from '@blackglory/prelude'
import { isntNegative } from '@src/utils'

export function LIMIT(limit: number): string {
  assert(Number.isInteger(limit), 'limit should be an integer')
  assert(isntNegative(limit), 'limit should be positive')

  return `LIMIT ${limit}`
}
