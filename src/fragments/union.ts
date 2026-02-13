export function UNION(all: unknown = false): string {
  return all
       ? 'UNION ALL'
       : 'UNION'
}
