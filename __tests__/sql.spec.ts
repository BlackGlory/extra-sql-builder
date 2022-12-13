import { sql } from '@src/sql'

describe('sql', () => {
  describe('as a function', () => {
    it('returns string', () => {
      const result = sql('SELECT *', 'FROM my_table')

      expect(result).toBe('SELECT *\nFROM my_table;')
    })

    it('ignores falsy', () => {
      const result = sql('SELECT *', null, 'FROM my_table')

      expect(result).toBe('SELECT *\nFROM my_table;')
    })
  })

  describe('as a tag function', () => {
    it('returns string', () => {
      const result = sql`SELECT * ${'FROM my_table'};`

      expect(result).toBe('SELECT * FROM my_table;')
    })

    it('ignores falsy', () => {
      const result = sql`SELECT * ${null}${'FROM my_table'};`

      expect(result).toBe('SELECT * FROM my_table;')
    })
  })
})
