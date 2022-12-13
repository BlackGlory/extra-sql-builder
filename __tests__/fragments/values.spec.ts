import { text } from '@values/text'
import { VALUES } from '@fragments/values'

describe('VALUES', () => {
  test('one value', () => {
    const result = VALUES(['1', text('value')])

    expect(result).toBe(`VALUES (1, 'value')`)
  })

  test('more than one value', () => {
    const result = VALUES(
      ['1', text('value1')]
    , ['2', text('value2')]
    )

    expect(result).toBe(`VALUES (1, 'value1'), (2, 'value2')`)
  })

  test('ignores falsy', () => {
    const result = VALUES(
      ['1', text('value1')]
    , null
    , ['2', text('value2')]
    )

    expect(result).toBe(`VALUES (1, 'value1'), (2, 'value2')`)
  })
})
