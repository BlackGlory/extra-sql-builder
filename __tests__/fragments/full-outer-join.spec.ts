import { FULL_OUTER_JOIN } from '@fragments/full-outer-join'

test('FULL_OUTER_JOIN', () => {
  const result = FULL_OUTER_JOIN('my_table')

  expect(result).toBe('FULL OUTER JOIN my_table')
})
