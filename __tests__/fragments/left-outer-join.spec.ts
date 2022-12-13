import { LEFT_OUTER_JOIN } from '@fragments/left-outer-join'

test('LEFT_OUTER_JOIN', () => {
  const result = LEFT_OUTER_JOIN('my_table')

  expect(result).toBe('LEFT OUTER JOIN my_table')
})
