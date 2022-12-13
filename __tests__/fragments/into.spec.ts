import { INTO } from '@fragments/into'

test('INTO', () => {
  const result = INTO('my_table')

  expect(result).toBe('INTO my_table')
})
