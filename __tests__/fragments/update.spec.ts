import { test, expect } from 'vitest'
import { UPDATE } from '@fragments/update.js'

test('UPDATE', () => {
  const result = UPDATE('my_table')

  expect(result).toBe('UPDATE my_table')
})
