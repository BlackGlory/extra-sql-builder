import { SET, Set } from '@fragments/set'

describe('SET(...statments: string[]): Set', () => {
  describe('one statement', () => {
    it('return Set', () => {
      const result = SET(`id = 'id'`)

      expect(result).toBeInstanceOf(Set)
      expect(`${result}`).toBe(`SET id = 'id'`)
    })
  })

  describe('more than one statement', () => {
    it('return Set', () => {
      const result = SET(`id1 = 'id1'`, `id2 = 'id2'`)

      expect(result).toBeInstanceOf(Set)
      expect(`${result}`).toBe(`SET id1 = 'id1', id2 = 'id2'`)
    })
  })
})
