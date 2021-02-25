export abstract class FragmentBase {
  disabled: boolean = false

  private [Symbol.toPrimitive](hint: string) {
    if (hint === 'string') {
      if (this.disabled) {
        return ''
      } else {
        return this.build()
      }
    }
  }

  protected abstract build(): string
}
