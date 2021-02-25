import { FragmentBase } from '@fragment-base'

export function OFFSET(offset: number): Offset {
  return new Offset(offset)
}

export class Offset extends FragmentBase {
  constructor(public offset: number) {
    super()
  }

  build() {
    return `OFFSET ${this.offset}`
  }
}
