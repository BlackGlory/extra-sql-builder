import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils.js'

export function WHERE(condition: string): string {
  assert(isntEmptyString(condition), 'condition should not be an empty string')

  return `WHERE ${condition}`
}
