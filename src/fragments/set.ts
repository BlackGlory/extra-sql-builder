import { assert, Falsy, isntEmptyArray, isntFalsy } from '@blackglory/prelude'
import { isntEmptyString } from '@src/utils.js'

export function SET(...statements: Array<string | Falsy>): string {
  const truthyStatements = statements.filter(isntFalsy)
  assert(isntEmptyArray(truthyStatements), 'statements should not be empty')
  assert(truthyStatements.every(isntEmptyString), 'statements should not contain empty strings')

  return `SET ${truthyStatements.join(', ')}`
}
