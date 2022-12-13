import { ON } from '@fragments/on'

test('ON', () => {
  const result = ON(`id = 'id'`)

  expect(result).toBe(`ON id = 'id'`)
})
