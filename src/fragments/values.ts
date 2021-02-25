import { Falsy, isntFalsy } from '@blackglory/types'
import { FragmentBase } from '@fragment-base'

export function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): Values {
  return new Values(values as string[][])
}

export class Values extends FragmentBase {
  constructor(public values: Array<string[] | Falsy>) {
    super()
  }

  build() {
    return `VALUES ${this.values.filter(isntFalsy).map(x => `(${x.join(', ')})`).join(', ')}`
  }
}
