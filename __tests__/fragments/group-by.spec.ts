import { GROUP_BY } from '@fragments/group-by'

describe('GROUP_BY', () => {
  test('one field', () => {
    const result = GROUP_BY('id')

    expect(result).toBe('GROUP BY id')
  })

  test('more than one field', () => {
    const result = GROUP_BY('id1', 'id2')

    expect(result).toBe('GROUP BY id1, id2')
  })

  test('ignore falsy', () => {
    const result = GROUP_BY('id1', null, 'id2')

    expect(result).toBe('GROUP BY id1, id2')
  })
})
