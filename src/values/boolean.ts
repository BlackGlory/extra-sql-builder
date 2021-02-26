import { isNull, isUndefined } from '@blackglory/types'

export function boolean(val: boolean): string {
  return val ? '1' : '0'
}

export function nullableBoolean(val: boolean | null | undefined): string {
  if (isNull(val) || isUndefined(val)) {
    return 'NULL'
  } else {
    return boolean(val)
  }
}
