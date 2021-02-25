import { UPDATE, Update } from '@fragments/update'

describe('UPDATE(table: string): Update', () => {
  it('return Update', () => {
    const result = UPDATE('my_table')

    expect(result).toBeInstanceOf(Update)
    expect(`${result}`).toBe('UPDATE my_table')
  })
})
