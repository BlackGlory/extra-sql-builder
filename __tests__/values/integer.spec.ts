import { getError } from 'return-style'
import { AssertionError } from '@blackglory/errors'
import { integer } from '@values/integer'

describe('integer(integer: number): string', () => {
  describe('is integer', () => {
    it('return string', () => {
      const result = integer(1)

      expect(result).toBe('1')
    })
  })

  describe('isnt integer', () => {
    it('throw AssertionError', () => {
      const err = getError(() => integer(1.5))

      expect(err).toBeInstanceOf(AssertionError)
    })
  })
})
