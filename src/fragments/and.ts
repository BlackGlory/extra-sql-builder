import { isntEmptyString } from '@src/utils'
import { assert } from '@blackglory/prelude'

export function AND(condition: string): string {
  assert(isntEmptyString(condition), 'condition should not be an empty string')

  return `AND ${condition}`
}
