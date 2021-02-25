import { FragmentBase } from '@fragment-base'

export function UNION(all: unknown = false): Union {
  return new Union(!!all)
}

export class Union extends FragmentBase {
  constructor(public all: boolean) {
    super()
  }

  build() {
    if (this.all) {
      return 'UNION ALL'
    } else {
      return 'UNION'
    }
  }
}
