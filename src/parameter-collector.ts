import fromPairs from 'lodash/fromPairs'

export class ParameterCollector<T> {
  private values: T[] = []

  constructor(private prefix: string) {}

  add(value: T): string {
    const index = this.values.push(value)
    return this.createKey(index)
  }

  toRecord(): Record<string, T> {
    const entries = this.values.map((x, i) => [this.createKey(i + 1), x])
    return fromPairs(entries)
  }

  toArray(): T[] {
    return [...this.values]
  }

  private createKey(index: number): string {
    return `${this.prefix}${index}`
  }
}
