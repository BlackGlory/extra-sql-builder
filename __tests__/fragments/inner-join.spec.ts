import { INNER_JOIN, InnerJoin } from '@fragments/inner-join'

describe('INNER_JOIN(table: string): InnerJoin', () => {
  it('return InnerJoin', () => {
    const result = INNER_JOIN('my_table')

    expect(result).toBeInstanceOf(InnerJoin)
    expect(`${result}`).toBe('INNER JOIN my_table')
  })
})
