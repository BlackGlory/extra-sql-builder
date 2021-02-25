import { INTO, Into } from '@fragments/into'

describe('INTO(table: string): Into', () => {
  it('return Into', () => {
    const result = INTO('my_table')

    expect(result).toBeInstanceOf(Into)
    expect(`${result}`).toBe('INTO my_table')
  })
})
