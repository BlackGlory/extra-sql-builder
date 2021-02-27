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

describe('sql(strings: TemplateStringsArray, ...values: unknown[]): string', () => {
  it('return string', () => {
    const result = sql`SELECT * ${'FROM my_table'};`

    expect(result).toBe('SELECT * FROM my_table;')
  })

  it('ignores falsy', () => {
    const result = sql`SELECT * ${null}${'FROM my_table'};`

    expect(result).toBe('SELECT * FROM my_table;')
  })
})
