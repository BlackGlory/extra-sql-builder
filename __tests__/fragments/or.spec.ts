import { test, expect } from 'vitest'
import { OR } from '@fragments/or.js'

test('OR', () => {
  const result = OR(`id = 'id'`)

  expect(result).toBe(`OR id = 'id'`)
})
