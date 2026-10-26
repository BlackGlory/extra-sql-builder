import { test, expect } from 'vitest'
import { WHERE } from '@fragments/where.js'

test('WHERE', () => {
  const result = WHERE(`id = 'id'`)

  expect(result).toBe(`WHERE id = 'id'`)
})
