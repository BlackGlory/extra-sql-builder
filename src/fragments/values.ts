import { FragmentBase } from '@fragment-base'

export function VALUES<T extends string[]>(...values: [T, ...T[]]): Values {
  return new Values(values as string[][])
}

export class Values extends FragmentBase {
  constructor(public values: string[][]) {
    super()
  }

  build() {
    return `VALUES ${this.values.map(x => `(${x.join(', ')})`).join(', ')}`
  }
}
