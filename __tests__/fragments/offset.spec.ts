import { test, expect } from 'vitest'
import { OFFSET } from '@fragments/offset.js'

test('OFFSET', () => {
  const result = OFFSET(10)

  expect(result).toBe('OFFSET 10')
})
