import { OFFSET } from '@fragments/offset'

test('OFFSET', () => {
  const result = OFFSET(10)

  expect(result).toBe('OFFSET 10')
})
