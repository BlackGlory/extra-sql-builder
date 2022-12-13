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
}
```

### Values
```ts
function boolean(val: boolean): string
function nullableBoolean(val: boolean | null | undefined): string

function integer(val: number): string
function nullableInteger(val: number | null | undefined): string

function json(val: object): string
function nullableJson(val: object | null | undefined): string

function text(val: string): string
function nullableText(val: string | null | undefined): string
```

### Fragments
```ts
function AND(condition: string): And
function DELETE_FROM(table: string): DeleteFrom
function FROM(...tables: Array<string | Falsy>): From
function FULL_OUTER_JOIN(table: string): FullOuterJoin
function GROUP_BY(...fields: Array<string | Falsy>): GroupBy
function HAVING(condition: string): Having
function INNER_JOIN(table: string): InnerJoin
function INSERT_INTO(table: string, fields: Array<string | Falsy>): InsertInto
function INTO(table: string): Into
function LEFT_OUTER_JOIN(table: string): LeftOuterJoin
function LIMIT(limit: number): Limit
function OFFSET(offset: number): Offset
function ON(condition: string): On
function OR(condition: string): Or
function ORDER_BY(...fields: Array<string | Falsy>): OrderBy
function RIGHT_OUTER_JOIN(table: string): RightOuterJoin
function SELECT(...fields: Array<string | Falsy>): Select
function SET(...statements: string[]): Set
function UNION(all: unknown = false): Union
function UPDATE(table: string): Update
function VALUES<T extends string[] | Falsy>(...values: [T, ...T[]]): Values
function WHERE(condition: string): Where
```

## FAQ
### What about SQL injection?
As long as you don't take user input as a parameter,
there will be no SQL injection vulnerability.
