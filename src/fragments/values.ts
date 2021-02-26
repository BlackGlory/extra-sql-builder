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
    return `VALUES ${this.values.map(x => `(${x.join(', ')})`).join(', ')}`
  }
}
