import { text, nullableText } from '@values/text'

describe('text', () => {
  describe('text without single quote', () => {
    it('returns string', () => {
      const result = text('hello world')

      expect(result).toBe(`'hello world'`)
    })
  })

  describe('text with single quote', () => {
    it('returns string', () => {
      const result = text(`'hello world'`)

      expect(result).toBe(`'''hello world'''`)
    })
  })
})

describe('nullableText', () => {
  describe('string', () => {
    it('returns string', () => {
      const result = text('hello world')

      expect(result).toBe(`'hello world'`)
    })
  })

  describe('null', () => {
    it('returns NULL', () => {
      const result = nullableText(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('returns NULL', () => {
      const result = nullableText(undefined)

      expect((result)).toBe('NULL')
    })
  })
})
