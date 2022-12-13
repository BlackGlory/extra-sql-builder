import { INNER_JOIN } from '@fragments/inner-join'

test('INNER_JOIN', () => {
  const result = INNER_JOIN('my_table')

  expect(result).toBe('INNER JOIN my_table')
})
