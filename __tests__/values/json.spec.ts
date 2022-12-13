import { json, nullableJson } from '@values/json'

describe('json', () => {
  it('returns string', () => {
    const result = json({ lookUpAtTheSky: "Don't tell me you don't see it" })

    expect(result).toBe(`'{"lookUpAtTheSky":"Don''t tell me you don''t see it"}'`)
  })
})

describe('nullableJson', () => {
  describe('object', () => {
    it('returns string', () => {
      const result = json({ lookUpAtTheSky: "Don't tell me you don't see it" })

      expect(result).toBe(`'{"lookUpAtTheSky":"Don''t tell me you don''t see it"}'`)
    })
  })

  describe('null', () => {
    it('returns NULL', () => {
      const result = nullableJson(null)

      expect(result).toBe('NULL')
    })
  })

  describe('undefined', () => {
    it('returns NULL', () => {
      const result = nullableJson(undefined)

      expect(result).toBe('NULL')
    })
  })
})
