import { test, expect } from 'vitest'
import { LIMIT } from '@fragments/limit.js'

test('LIMIT', () => {
  const result = LIMIT(10)

  expect(result).toBe('LIMIT 10')
})
