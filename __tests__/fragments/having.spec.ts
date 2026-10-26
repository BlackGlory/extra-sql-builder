import { test, expect } from 'vitest'
import { HAVING } from '@fragments/having.js'

test('HAVING', () => {
  const result = HAVING(`id = 'id'`)

  expect(result).toBe(`HAVING id = 'id'`)
})
