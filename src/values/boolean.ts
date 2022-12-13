import { isNullish, Nullable } from '@blackglory/prelude'

export function boolean(val: boolean): string {
  return val ? '1' : '0'
}

export function nullableBoolean(val: Nullable<boolean>): string {
  return isNullish(val)
       ? 'NULL'
       : boolean(val)
}
