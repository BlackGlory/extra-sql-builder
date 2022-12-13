import { ORDER_BY } from '@fragments/order-by'

describe('ORDER_BY', () => {
  test('one field', () => {
    const result = ORDER_BY('id')

    expect(result).toBe('ORDER BY id')
  })

  test('more than one field', () => {
    const result = ORDER_BY('id1', 'id2')

    expect(result).toBe('ORDER BY id1, id2')
  })

  test('ignore falsy', () => {
    const result = ORDER_BY('id1', null, 'id2')

    expect(result).toBe('ORDER BY id1, id2')
  })
})
