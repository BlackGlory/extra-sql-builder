import { boolean } from '@values/boolean'

describe('boolean(boolean: unknown): string', () => {
  describe('is truthy', () => {
    it('return 1', () => {
      const result = boolean(true)

      expect(result).toBe('1')
    })
  })

  describe('is falsy', () => {
    it('return 0', () => {
      const result = boolean(false)

      expect(result).toBe('0')
    })
  })
})
