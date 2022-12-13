import { OR } from '@fragments/or'

test('OR', () => {
  const result = OR(`id = 'id'`)

  expect(result).toBe(`OR id = 'id'`)
})
