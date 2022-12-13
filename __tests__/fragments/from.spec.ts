import { FROM } from '@fragments/from'

describe('FROM', () => {
  test('one table', () => {
    const result = FROM('my_table')

    expect(result).toBe('FROM my_table')
  })

  test('more than one table', () => {
    const result = FROM('my_table1', 'my_table2')

    expect(result).toBe('FROM my_table1, my_table2')
  })

  test('ignore falsy', () => {
    const result = FROM('my_table1', null, 'my_table2')

    expect(result).toBe('FROM my_table1, my_table2')
  })
})
