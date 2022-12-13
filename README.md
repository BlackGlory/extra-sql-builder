# extra-sql-builder
## Install
```sh
npm install --save extra-sql-builder
# or
yarn add extra-sql-builder
```

## Motivation
It is hard to create SQL statements programmatically:
- Concatenating strings is ugly and dangerous.
- Traditional SQL builders are not intuitive.
- ORMs are too indirect and have poor performance.

## Usage
```ts
import { INSERT_INTO, VALUES, text, sql } from 'extra-sql-builder'

// INSERT INTO my_table (id, value)
// VALUES (1, 'hello'), (2, 'world');

const cond = true

const result1 = sql(
  INSERT_INTO('my_table', ['id', 'value'])
, VALUES(
    ['1', text('hello')],
    cond && ['2', text('world')]
  )
)

// or
const result2 = sql(
 'INSERT INTO my_table (id, value)'
, VALUES(
    ['1', text('hello')]
  , cond && ['2', text('world')]
  )
)

// or
const result3 = sql`
  INSERT INTO my_table (id, value)
  VALUES (1, 'hello')
  ${cond && `, (2, 'world')`};
`

// or
const result4 = `
  INSERT INTO my_table (id, value)
  ${VALUES(
    ['1', text('hello')]
  , cond && ['2', text('world')]
  )};
`

// or
const values = VALUES(['1', text('hello')])
if (cond) {
  values.values.push(['2', text('world')])
}

const result5 = `
  INSERT INTO my_table (id, value)
  ${values};
`
```

## API
### sql
```ts
function sql(...fragments: Array<string | Falsy>): string
function sql(strings: TemplateStringsArray, ...values: unknown[]): string
function sql(...args: unknown[]): string
```

### ParameterCollector
```ts
class ParameterCollector<T> {
  constructor(prefix: string)

  add(value: T): string
  toRecord(): Record<string, T>
  toArray(): T[]
}
```

#### Examples
##### Named parameters
```ts
const collector = new ParameterCollector('$param')

query(
  sql`
    INSERT INTO table (value)
    VALUES (${collector.add(123)})
         , (${collector.add(456)})
  `
  // INSERT INTO table (value)
  // VALUES ($param1)
  //      , ($param2)
, collector.toRecord()
  // {
  //   param1: 123
  // , param2: 456
  // }
)
```

##### Indexed parameters
```ts
const collector = new ParameterCollector('$')

query(
  sql`
    INSERT INTO table (value)
    VALUES (${collector.add(123)})
         , (${collector.add(456)})
  `
  // INSERT INTO table (value)
  // VALUES ($1)
  //      , ($2)
, collector.toArray()
  // [123, 456]
)
```

### Values
```ts
function boolean(val: boolean): string
function nullableBoolean(val: Nullable<boolean>): string

function integer(val: number): string
function nullableInteger(val: Nullable<number>): string

function json(val: object): string
function nullableJson(val: Nullable<object>): string

function text(val: string): string
function nullableText(val: Nullable<string>): string
```

### Fragments
```ts
function AND(condition: string): string
function DELETE_FROM(table: string): string
function FROM(...tables: Array<string | Falsy>): string
function FULL_OUTER_JOIN(table: string): string
function GROUP_BY(...fields: Array<string | Falsy>): string
function HAVING(condition: string): string
function INNER_JOIN(table: string): string
function INSERT_INTO(table: string, fields: Array<string | Falsy>): string
function INTO(table: string): string
function LEFT_OUTER_JOIN(table: string): string
function LIMIT(limit: number): string
function OFFSET(offset: number): string
function ON(condition: string): string
function OR(condition: string): string
function ORDER_BY(...fields: Array<string | Falsy>): string
function RIGHT_OUTER_JOIN(table: string): string
function SELECT(...fields: Array<string | Falsy>): string
function SET(...statements: string[]): string
function UNION(all: unknown = false): string
function UPDATE(table: string): string
function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): string
function WHERE(condition: string): string
```

## FAQ
### What about SQL injection?
As long as you don't take user input as a parameter,
there will be no SQL injection vulnerability.
