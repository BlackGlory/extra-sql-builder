import { RIGHT_OUTER_JOIN, RightOuterJoin } from '@fragments/right-outer-join'

describe('RIGHT_OUTER_JOIN(table: string): RightOuterJoin', () => {
  it('return RightOuterJoin', () => {
    const result = RIGHT_OUTER_JOIN('my_table')

    expect(result).toBeInstanceOf(RightOuterJoin)
    expect(`${result}`).toBe('RIGHT OUTER JOIN my_table')
  })
})
