import { DELETE_FROM } from '@fragments/delete-from'

test('DELETE_FROM', () => {
  const result = DELETE_FROM('my_table')

  expect(result).toBe('DELETE FROM my_table')
})
