import { RIGHT_OUTER_JOIN } from '@fragments/right-outer-join'

test('RIGHT_OUTER_JOIN', () => {
  const result = RIGHT_OUTER_JOIN('my_table')

  expect(result).toBe('RIGHT OUTER JOIN my_table')
})
