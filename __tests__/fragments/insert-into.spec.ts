import { INSERT_INTO } from '@fragments/insert-into'

describe('INSERT_INTO', () => {
  test('one field', () => {
    const result = INSERT_INTO('my_table', ['id'])

    expect(result).toBe('INSERT INTO my_table (id)')
  })

  test('more than one field', () => {
    const result = INSERT_INTO('my_table', ['id1', 'id2'])

    expect(result).toBe('INSERT INTO my_table (id1, id2)')
  })

  test('ignore falsy', () => {
    const result = INSERT_INTO('my_table', ['id1', null, 'id2'])

    expect(result).toBe('INSERT INTO my_table (id1, id2)')
  })
})
