import { assert } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function SET(...statements: string[]): string {
  assert(isntEmptyArray(statements), 'statements should not be empty')
  assert(statements.every(isntEmptyString), 'statements should not contain empty strings')

  return `SET ${statements.join(', ')}`
}
