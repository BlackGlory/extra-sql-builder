import { Falsy, isntFalsy, isString } from '@blackglory/types'

export function sql(...fragments: Array<string | Falsy>): string
export function sql(strings: TemplateStringsArray, ...values: Array<string | Falsy>): string
export function sql(...args: unknown[]): string {
  if (isTemplateStringArray(args[0])) {
    const [strings, ...values] = args
    return concatTruthyStringsTag(strings, ...values)
  } else {
    return `${args.filter(isntFalsy).join('\n')};`
  }
}

function isTemplateStringArray(val: unknown): val is TemplateStringsArray {
  return Array.isArray(val) && val.every(isString)
}

function concatTruthyStringsTag(strings: TemplateStringsArray, ...values: unknown[]): string {
  const result: string[] = []
  for (let i = 0; i < values.length; i++) {
    result.push(strings[i])

    const value = values[i]
    if (isntFalsy(value)) result.push(`${value}`)
  }
  result.push(last(strings))
  return result.join('')
}

function last<T>(xs: ArrayLike<T>): T {
  return xs[xs.length - 1]
}
