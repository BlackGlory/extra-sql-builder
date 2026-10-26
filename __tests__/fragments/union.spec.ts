import { describe, test, expect } from 'vitest'
import { UNION } from '@fragments/union.js'

describe('UNION', () => {
  test('all = true', () => {
    const result = UNION('ALL')

    expect(result).toBe('UNION ALL')
  })

  test('all = false', () => {
    const result = UNION()

    expect(result).toBe('UNION')
  })
})
