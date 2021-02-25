import { text } from '@values/text'

describe('text(text: string): string', () => {
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
