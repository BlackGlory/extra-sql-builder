import { test, expect } from 'vitest'
import { AND } from '@fragments/and.js'

test('AND', () => {
  const result = AND(`id = 'test'`)

  expect(result).toBe(`AND id = 'test'`)
})
