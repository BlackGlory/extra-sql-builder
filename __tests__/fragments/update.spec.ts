import { UPDATE } from '@fragments/update'

test('UPDATE', () => {
  const result = UPDATE('my_table')

  expect(result).toBe('UPDATE my_table')
})
