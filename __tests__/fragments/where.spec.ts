import { WHERE, Where } from '@fragments/where'

describe('WHERE(condition: string): Where', () => {
  it('return Where', () => {
    const result = WHERE(`id = 'id'`)

    expect(result).toBeInstanceOf(Where)
    expect(`${result}`).toBe(`WHERE id = 'id'`)
  })
})
