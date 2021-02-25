import { sql } from '@src/sql'

describe('sql(...fragments: string[]): string', () => {
  it('return string', () => {
    const result = sql('SELECT *', 'FROM my_table')

    expect(result).toBe('SELECT *\nFROM my_table;')
  })
})
