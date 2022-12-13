import { ParameterCollector } from '@src/parameter-collector'

describe('ParameterCollector', () => {
  test('add', () => {
    const collector = new ParameterCollector<string>('foo')

    const id1 = collector.add('hello')
    const id2 = collector.add('world')

    expect(id1).toBe('foo1')
    expect(id2).toBe('foo2')
  })

  test('toRecord', () => {
    const collector = new ParameterCollector<string>('foo')
    collector.add('hello')
    collector.add('world')

    const result = collector.toRecord()

    expect(result).toStrictEqual({
      foo1: 'hello'
    , foo2: 'world'
    })
  })

  test('toArray', () => {
    const collector = new ParameterCollector<string>('foo')
    collector.add('hello')
    collector.add('world')

    const result = collector.toArray()

    expect(result).toStrictEqual(['hello', 'world'])
  })
})
