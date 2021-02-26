export function isntEmptyString(str: string): boolean {
  return str.trim() !== ''
}

export function isntEmptyArray(arr: unknown[]): boolean {
  return arr.length !== 0
}

export function isntNegative(num: number): boolean {
  return num >= 0
}
