import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function ON(condition: string): string {
  assert(isntEmptyString(condition), 'condition should not be an empty string')

  return `ON ${condition}`
}
