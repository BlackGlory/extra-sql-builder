import { SELECT, Select } from '@fragments/select'

describe('SELECT(...fields: string[]): Select', () => {
  describe('one field', () => {
    it('return Select', () => {
      const result = SELECT('id')

      expect(result).toBeInstanceOf(Select)
      expect(`${result}`).toBe('SELECT id')
    })
  })

  describe('more than one field', () => {
    it('return Select', () => {
      const result = SELECT('id1', 'id2')

      expect(result).toBeInstanceOf(Select)
      expect(`${result}`).toBe('SELECT id1, id2')
    })
  })
})
