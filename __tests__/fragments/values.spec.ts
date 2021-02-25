import { text } from '@values/text'
import { VALUES, Values } from '@fragments/values'

describe('VALUES(...values: string[][]): Values', () => {
  describe('one value', () => {
    it('return Values', () => {
      const result = VALUES(['1', text('value')])

      expect(result).toBeInstanceOf(Values)
      expect(`${result}`).toBe(`VALUES (1, 'value')`)
    })
  })

  describe('more than one value', () => {
    it('return Values', () => {
      const result = VALUES(
        ['1', text('value1')]
      , ['2', text('value2')]
      )

      expect(result).toBeInstanceOf(Values)
      expect(`${result}`).toBe(`VALUES (1, 'value1'), (2, 'value2')`)
    })
  })
})
