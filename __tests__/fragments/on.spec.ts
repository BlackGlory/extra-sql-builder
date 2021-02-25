import { ON, On } from '@fragments/on'

describe('ON(condition: string): On', () => {
  it('return On', () => {
    const result = ON(`id = 'id'`)

    expect(result).toBeInstanceOf(On)
    expect(`${result}`).toBe(`ON id = 'id'`)
  })
})
