import { FULL_OUTER_JOIN, FullOuterJoin } from '@fragments/full-outer-join'

describe('FULL_OUTER_JOIN(table: string): FullOuterJoin', () => {
  it('return FullOuterJoin', () => {
    const result = FULL_OUTER_JOIN('my_table')

    expect(result).toBeInstanceOf(FullOuterJoin)
    expect(`${result}`).toBe('FULL OUTER JOIN my_table')
  })
})
