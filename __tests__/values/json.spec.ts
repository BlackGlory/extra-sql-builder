import { json, nullableJson } from '@values/json'

describe('json(val: object): string', () => {
  it('return string', () => {
    const result = json({ lookUpAtTheSky: "Don't tell me you don't see it" })

    expect(result).toBe(`'{"lookUpAtTheSky":"Don''t tell me you don''t see it"}'`)
  })
})

describe('nullableJson(val: object | null | undefined): string', () => {
  describe('object', () => {
    it('return string', () => {
      const result = json({ lookUpAtTheSky: "Don't tell me you don't see it" })

      expect(result).toBe(`'{"lookUpAtTheSky":"Don''t tell me you don''t see it"}'`)
    })
  })

  describe('null', () => {
    it('return NULL', () => {
      const result = nullableJson(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('return NULL', () => {
      const result = nullableJson(undefined)

      expect(result).toBe('NULL')
    })
  })
})
