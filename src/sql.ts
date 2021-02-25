import { Falsy, isntFalsy } from '@blackglory/types'

export function sql(...fragments: Array<string | Falsy>): string {
  return `${fragments.filter(isntFalsy).join('\n')};`
}
