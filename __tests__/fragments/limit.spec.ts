import { LIMIT } from '@fragments/limit'

test('LIMIT', () => {
  const result = LIMIT(10)

  expect(result).toBe('LIMIT 10')
})
