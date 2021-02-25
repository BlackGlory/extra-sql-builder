import { HAVING, Having } from '@fragments/having'

describe('HAVING(condition: string): Having', () => {
  it('return Having', () => {
    const result = HAVING(`id = 'id'`)

    expect(result).toBeInstanceOf(Having)
    expect(`${result}`).toBe(`HAVING id = 'id'`)
  })
})
