import { test, expect } from 'vitest'
import { INTO } from '@fragments/into.js'

test('INTO', () => {
  const result = INTO('my_table')

  expect(result).toBe('INTO my_table')
})
