import { isNull, isUndefined } from '@blackglory/types'

export function text(val: string): string {
  return `'${val.replace(/'/g, "''")}'`
}

export function nullableText(val: string | null | undefined): string {
  if (isNull(val) || isUndefined(val)) {
    return 'NULL'
  } else {
    return text(val)
  }
}
