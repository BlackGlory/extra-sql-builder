import { OR, Or } from '@fragments/or'

describe('OR(condition: string): Or', () => {
  it('return Or', () => {
    const result = OR(`id = 'id'`)

    expect(result).toBeInstanceOf(Or)
    expect(`${result}`).toBe(`OR id = 'id'`)
  })
})
