import { FragmentBase } from '@fragment-base'

export function FROM(...tables: string[]): From {
  return new From(tables)
}

export class From extends FragmentBase {
  constructor(public tables: string[]) {
    super()
  }

  build(): string {
    return `FROM ${this.tables.join(', ')}`
  }
}
