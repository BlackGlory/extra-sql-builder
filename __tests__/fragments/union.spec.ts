import { UNION, Union } from '@fragments/union'

describe('UNION(all: unknown = false): Union', () => {
  describe('all = true', () => {
    it('return Union', () => {
       const result = UNION('ALL')

       expect(result).toBeInstanceOf(Union)
       expect(`${result}`).toBe('UNION ALL')
    })
  })

  describe('all = false', () => {
    it('return Union', () => {
      const result = UNION()

      expect(result).toBeInstanceOf(Union)
      expect(`${result}`).toBe('UNION')
    })
  })
})
