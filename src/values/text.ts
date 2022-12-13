import { isNullish, Nullable } from '@blackglory/prelude'

export function text(val: string): string {
  return `'${val.replace(/'/g, "''")}'`
}

export function nullableText(val: Nullable<string>): string {
  return isNullish(val)
       ? 'NULL'
       : text(val)
}
