import { sql } from '@src/sql'

describe('sql(...fragments: Array<string | Falsy>): string', () => {
  it('return string', () => {
    const result = sql('SELECT *', 'FROM my_table')

    expect(result).toBe('SELECT *\nFROM my_table;')
  })

  it('ignores falsy', () => {
    const result = sql('SELECT *', null, 'FROM my_table')

    expect(result).toBe('SELECT *\nFROM my_table;')
  })
})
