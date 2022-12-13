import { HAVING } from '@fragments/having'

test('HAVING', () => {
  const result = HAVING(`id = 'id'`)

  expect(result).toBe(`HAVING id = 'id'`)
})
