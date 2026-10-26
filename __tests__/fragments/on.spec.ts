import { test, expect } from 'vitest'
import { ON } from '@fragments/on.js'

test('ON', () => {
  const result = ON(`id = 'id'`)

  expect(result).toBe(`ON id = 'id'`)
})
