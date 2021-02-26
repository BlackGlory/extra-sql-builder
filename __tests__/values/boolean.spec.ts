import { boolean, nullableBoolean } from '@values/boolean'

describe('boolean(val: boolean): string', () => {
  describe('true', () => {
    it('return 1', () => {
      const result = boolean(true)

      expect(result).toBe('1')
    })
  })

  describe('false', () => {
    it('return 0', () => {
      const result = boolean(false)

      expect(result).toBe('0')
    })
  })
})

describe('nullableBoolean(val: boolean | null | undefined): string', () => {
  describe('boolean', () => {
    it('return string', () => {
      const result = nullableBoolean(false)

      expect(result).toBe('0')
    })
  })

  describe('null', () => {
    it('return NULL', () => {
      const result = nullableBoolean(null)

      expect(result).toBe('NULL')
    })

  })

  describe('undefined', () => {
    it('return NULL', () => {
      const result = nullableBoolean(undefined)

      expect(result).toBe('NULL')
    })
  })
})
