import { GROUP_BY, GroupBy } from '@fragments/group-by'

describe('GROUP_BY(...fields: string[]): GroupBy', () => {
  describe('one field', () => {
    it('return GroupBy', () => {
      const result = GROUP_BY('id')

      expect(result).toBeInstanceOf(GroupBy)
      expect(`${result}`).toBe('GROUP BY id')
    })
  })

  describe('more than one field', () => {
    const result = GROUP_BY('id1', 'id2')

    expect(result).toBeInstanceOf(GroupBy)
    expect(`${result}`).toBe('GROUP BY id1, id2')
  })
})
