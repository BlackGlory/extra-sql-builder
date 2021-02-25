export function text(text: string): string {
  return `'${text.replace(/'/g, "''")}'`
}
