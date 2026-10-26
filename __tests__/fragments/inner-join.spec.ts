import { test, expect } from 'vitest'
import { INNER_JOIN } from '@fragments/inner-join.js'

test('INNER_JOIN', () => {
  const result = INNER_JOIN('my_table')

  expect(result).toBe('INNER JOIN my_table')
})
