import { FROM, From } from '@fragments/from'

describe('FROM(...tables: string[]) => From', () => {
  describe('one table', () => {
    it('return From', () => {
      const result = FROM('my_table')

      expect(result).toBeInstanceOf(From)
      expect(`${result}`).toBe('FROM my_table')
    })
  })

  describe('more than one table', () => {
    it('return From', () => {
      const result = FROM('my_table1', 'my_table2')

      expect(result).toBeInstanceOf(From)
      expect(`${result}`).toBe('FROM my_table1, my_table2')
    })
  })

  it('ignore falsy', () => {
    const result = FROM('my_table1', null, 'my_table2')

    expect(result).toBeInstanceOf(From)
    expect(`${result}`).toBe('FROM my_table1, my_table2')
  })
})
