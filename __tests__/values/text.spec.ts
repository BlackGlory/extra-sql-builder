import { text, nullableText } from '@values/text'

describe('text(val: string): string', () => {
  describe('text without single quote', () => {
    it('return string', () => {
      const result = text('hello world')

      expect(result).toBe(`'hello world'`)
    })
  })

  describe('text with single quote', () => {
    it('return string', () => {
      const result = text(`'hello world'`)

      expect(result).toBe(`'''hello world'''`)
    })
  })
})

describe('nullableText(val: string | null | undefined): string', () => {
  describe('string', () => {
    it('return string', () => {
      const result = text('hello world')

      expect(result).toBe(`'hello world'`)
    })
  })

  describe('null', () => {
    it('return NULL', () => {
      const result = nullableText(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('return NULL', () => {
      const result = nullableText(undefined)

      expect((result)).toBe('NULL')
    })
  })
})
