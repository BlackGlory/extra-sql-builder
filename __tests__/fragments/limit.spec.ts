import { LIMIT, Limit } from '@fragments/limit'

describe('LIMIT(limit: number): Limit', () => {
  it('return Limit', () => {
    const result = LIMIT(10)

    expect(result).toBeInstanceOf(Limit)
    expect(`${result}`).toBe('LIMIT 10')
  })
})
