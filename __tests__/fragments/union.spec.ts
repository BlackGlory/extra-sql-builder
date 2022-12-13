import { UNION } from '@fragments/union'

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
