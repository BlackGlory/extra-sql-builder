export function UNION(all: unknown = false): string {
  if (all) {
    return 'UNION ALL'
  } else {
    return 'UNION'
  }
}
