import { AND, And } from '@fragments/and'

describe('AND(condition: string) => And', () => {
  it('return And', () => {
    const result = AND(`id = 'test'`)

    expect(result).toBeInstanceOf(And)
    expect(`${result}`).toBe(`AND id = 'test'`)
  })
})
