import { WHERE } from '@fragments/where'

test('WHERE', () => {
  const result = WHERE(`id = 'id'`)

  expect(result).toBe(`WHERE id = 'id'`)
})
