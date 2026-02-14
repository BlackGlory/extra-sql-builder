import {  Falsy, isArray, isntFalsy, isString } from '@blackglory/prelude'
import { filter, dedent } from 'extra-tags'

export function sql(...fragments: Array<string | Falsy>): string
export function sql(strings: TemplateStringsArray, ...values: unknown[]): string
export function sql(...args: unknown[]): string {
  if (isTemplateStringArray(args[0])) {
    const [strings, ...values] = args

    return dedent(...filter(isntFalsy, strings, ...values))
  } else {
    const fragments = args

    // 添加分号是刻意为之的, 因为fragments没有机会添加分号.
    return `${fragments.filter(isntFalsy).join('\n')};`
  }
}

function isTemplateStringArray(val: unknown): val is TemplateStringsArray {
  return isArray(val)
      && val.every(isString)
}
