import { boolean, nullableBoolean } from '@values/boolean'

describe('boolean', () => {
  describe('true', () => {
    it('returns 1', () => {
      const result = boolean(true)

      expect(result).toBe('1')
    })
  })

  describe('false', () => {
    it('returns 0', () => {
      const result = boolean(false)

      expect(result).toBe('0')
    })
  })
})

describe('nullableBoolean', () => {
  describe('boolean', () => {
    it('returns string', () => {
      const result = nullableBoolean(false)

      expect(result).toBe('0')
    })
  })

  describe('null', () => {
    it('returns NULL', () => {
      const result = nullableBoolean(null)

      expect(result).toBe('NULL')
    })

  })

  describe('undefined', () => {
    it('returns NULL', () => {
      const result = nullableBoolean(undefined)

      expect(result).toBe('NULL')
    })
  })
})
