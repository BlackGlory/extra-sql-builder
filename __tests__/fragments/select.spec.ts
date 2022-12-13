import { SELECT } from '@fragments/select'

describe('SELECT', () => {
  test('one field', () => {
    const result = SELECT('id')

    expect(result).toBe('SELECT id')
  })

  test('more than one field', () => {
    const result = SELECT('id1', 'id2')

    expect(result).toBe('SELECT id1, id2')
  })

  test('ignore falsy', () => {
    const result = SELECT('id1', null, 'id2')

    expect(result).toBe('SELECT id1, id2')
  })
})
