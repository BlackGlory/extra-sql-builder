import { ORDER_BY, OrderBy } from '@fragments/order-by'

describe('ORDER_BY(...fields: string[])', () => {
  describe('one field', () => {
    it('return OrderBy', () => {
      const result = ORDER_BY('id')

      expect(result).toBeInstanceOf(OrderBy)
      expect(`${result}`).toBe('ORDER BY id')
    })
  })

  describe('more than one field', () => {
    it('return OrderBy', () => {
      const result = ORDER_BY('id1', 'id2')

      expect(result).toBeInstanceOf(OrderBy)
      expect(`${result}`).toBe('ORDER BY id1, id2')
    })
  })
})
