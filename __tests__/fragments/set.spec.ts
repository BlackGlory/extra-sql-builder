import { SET } from '@fragments/set'

describe('SET', () => {
  test('one statement', () => {
    const result = SET(`id = 'id'`)

    expect(result).toBe(`SET id = 'id'`)
  })

  test('more than one statement', () => {
    const result = SET(`id1 = 'id1'`, `id2 = 'id2'`)

    expect(result).toBe(`SET id1 = 'id1', id2 = 'id2'`)
  })

  test('ignore falsy', () => {
    const result = SET(`id1 = 'id1'`, null, `id2 = 'id2'`)

    expect(result).toBe(`SET id1 = 'id1', id2 = 'id2'`)
  })
})
