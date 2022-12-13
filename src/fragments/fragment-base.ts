export abstract class FragmentBase {
  [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      return this.build()
    }
  }

  protected abstract build(): string
}
