import { assert } from '@blackglory/prelude'
import { isntNegative } from '@src/utils'

export function LIMIT(limit: number): string {
  assert(
    Number.isInteger(limit) && isntNegative(limit)
  , 'limit should be a non-negative integer'
  )

  return `LIMIT ${limit}`
}
