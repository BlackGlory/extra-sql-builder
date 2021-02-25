import { OFFSET, Offset } from '@fragments/offset'

describe('OFFSET(offset: number): Offset', () => {
  it('return Offset', () => {
    const result = OFFSET(10)

    expect(result).toBeInstanceOf(Offset)
    expect(`${result}`).toBe('OFFSET 10')
  })
})
