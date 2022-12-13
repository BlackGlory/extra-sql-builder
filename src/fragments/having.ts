import { assert } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils'

export function HAVING(condition: string): string {
  assert(isntEmptyString(condition), 'condition should not be an empty string')

  return `HAVING ${condition}`
}
