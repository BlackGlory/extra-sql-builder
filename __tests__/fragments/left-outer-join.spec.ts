import { LEFT_OUTER_JOIN, LeftOuterJoin } from '@fragments/left-outer-join'

describe('LEFT_OUTER_JOIN(table: string): LeftOuterJoin', () => {
  it('return LeftOuterJoin', () => {
    const result = LEFT_OUTER_JOIN('my_table')

    expect(result).toBeInstanceOf(LeftOuterJoin)
    expect(`${result}`).toBe('LEFT OUTER JOIN my_table')
  })
})
