import { assert, isntFalsy, Falsy } from '@blackglory/prelude'
import { isntEmptyArray, isntEmptyString } from '@src/utils'

export function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): string {
  const truthyValues = values.filter(isntFalsy)

  assert(isntEmptyArray(truthyValues), 'values should not be empty')
  assert(truthyValues.every(isntEmptyArray), 'values should not contain empty arrays')
  assert(
    truthyValues.every(xs => xs.every(isntEmptyString))
  , 'values should not contain empty strings'
  )

  return `VALUES ${truthyValues.map(x => `(${x.join(', ')})`).join(', ')}`
}
