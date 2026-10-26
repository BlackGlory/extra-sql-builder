export class ParameterCollector<T> {
  private values: T[] = []

  constructor(private prefix: string) {}

  add(value: T): string {
    const index = this.values.push(value)
    return this.createKey(index)
  }

  toRecord(): Record<string, T> {
    const entries = this.values
      .map((value, i) => [this.createKey(i + 1), value])

    return Object.fromEntries(entries)
  }

  toArray(): T[] {
    return [...this.values]
  }

  private createKey(index: number): string {
    return `${this.prefix}${index}`
  }
}
