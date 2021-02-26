import { assert } from '@blackglory/errors'
import { isntEmptyArray, isntEmptyString } from '@utils'
import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): Values {
  return new Values(values.filter(isntFalsy))
}

export class Values extends FragmentBase {
  constructor(public values: string[][]) {
    super()
  }

  build() {
    assert(isntEmptyArray(this.values))
    assert(this.values.every(isntEmptyArray))
    assert(this.values.every(xs => xs.every(isntEmptyString)))

    return `VALUES ${this.values.map(x => `(${x.join(', ')})`).join(', ')}`
  }
}
