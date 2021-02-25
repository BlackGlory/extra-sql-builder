import { json } from '@values/json'

describe('json(json: object): string', () => {
  it('return string', () => {
    const result = json({ lookUpAtTheSky: "Don't tell me you don't see it" })

    expect(result).toBe(`'{"lookUpAtTheSky":"Don''t tell me you don''t see it"}'`)
  })
})
