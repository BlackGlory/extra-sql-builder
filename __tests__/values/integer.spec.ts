import { getError } from 'return-style'
import { AssertionError } from '@blackglory/errors'
import { integer, nullableInteger } from '@values/integer'

describe('integer(val: number): string', () => {
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

describe('nullableInteger(val: number | null | undefined): string', () => {
  describe('integer', () => {
    it('return string', () => {
      const result = nullableInteger(1)

      expect(result).toBe('1')
    })
  })

  describe('null', () => {
    it('return NULL', () => {
      const result = nullableInteger(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('return NULL', () => {
      const result = nullableInteger(undefined)

      expect(result).toBe('NULL')
    })
  })
})
