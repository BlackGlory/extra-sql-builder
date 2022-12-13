import { AND } from '@fragments/and'

test('AND', () => {
  const result = AND(`id = 'test'`)

  expect(result).toBe(`AND id = 'test'`)
})
