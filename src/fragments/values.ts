import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'
import { Falsy } from 'justypes'

export function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): Values {
  return new Values(values.filter(isntFalsy))
}

export class Values extends FragmentBase {
  constructor(public values: string[][]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.values), 'values should not be empty')
    assert(this.values.every(isntEmptyArray), 'values should not contain empty arries')
    assert(
      this.values.every(xs => xs.every(isntEmptyString))
    , 'values should not contain empty strings'
    )

    return `VALUES ${this.values.map(x => `(${x.join(', ')})`).join(', ')}`
  }
}
