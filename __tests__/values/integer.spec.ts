import { getError } from 'return-style'
import { AssertionError } from '@blackglory/errors'
import { integer, nullableInteger } from '@values/integer'

describe('integer', () => {
  describe('is integer', () => {
    it('returns string', () => {
      const result = integer(1)

      expect(result).toBe('1')
    })
  })

  describe('isnt integer', () => {
    it('throws AssertionError', () => {
      const err = getError(() => integer(1.5))

      expect(err).toBeInstanceOf(AssertionError)
    })
  })
})

describe('nullableInteger', () => {
  describe('integer', () => {
    it('returns string', () => {
      const result = nullableInteger(1)

      expect(result).toBe('1')
    })
  })

  describe('null', () => {
    it('returns NULL', () => {
      const result = nullableInteger(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('returns NULL', () => {
      const result = nullableInteger(undefined)

      expect(result).toBe('NULL')
    })
  })
})
