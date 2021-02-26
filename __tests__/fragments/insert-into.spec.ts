import { INSERT_INTO, InsertInto } from '@fragments/insert-into'

describe('INSERT_INTO(table, fields: string[]): InsertInto', () => {
  describe('one field', () => {
    it('return InsertInto', () => {
      const result = INSERT_INTO('my_table', ['id'])

      expect(result).toBeInstanceOf(InsertInto)
      expect(`${result}`).toBe('INSERT INTO my_table (id)')
    })
  })

  describe('more than one field', () => {
    it('return InsertInto', () => {
      const result = INSERT_INTO('my_table', ['id1', 'id2'])

      expect(result).toBeInstanceOf(InsertInto)
      expect(`${result}`).toBe('INSERT INTO my_table (id1, id2)')
    })
  })

  it('ignore falsy', () => {
    const result = INSERT_INTO('my_table', ['id1', null, 'id2'])

    expect(result).toBeInstanceOf(InsertInto)
    expect(`${result}`).toBe('INSERT INTO my_table (id1, id2)')
  })
})
