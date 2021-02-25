export function sql(...fragments: string[]): string {
  return `${fragments.join('\n')};`
}
