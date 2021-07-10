import { isntFalsy, isString } from '@blackglory/types'
import { Falsy } from 'justypes'
import { removeFalsyValues, toString } from 'extra-tags'

export function sql(...fragments: Array<string | Falsy>): string
export function sql(strings: TemplateStringsArray, ...values: unknown[]): string
export function sql(...args: unknown[]): string {
  if (isTemplateStringArray(args[0])) {
    const [strings, ...values] = args
    return toString(...removeFalsyValues(strings, ...values))
  } else {
    return `${args.filter(isntFalsy).join('\n')};`
  }
}

function isTemplateStringArray(val: unknown): val is TemplateStringsArray {
  return Array.isArray(val) && val.every(isString)
}
