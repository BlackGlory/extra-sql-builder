import { assert, Falsy, isntFalsy } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function SET(...statements: Array<string | Falsy>): string {
  const truthyStatements = statements.filter(isntFalsy)

  assert(isntEmptyArray(statements), 'statements should not be empty')
  assert(truthyStatements.every(isntEmptyString), 'statements should not contain empty strings')

  return `SET ${truthyStatements.join(', ')}`
}
