# extra-sql-builder
## Install
```sh
npm install --save extra-sql-builder
# or
yarn add extra-sql-builder
```

## Motivation
It is difficult to create SQLs dynamically:
- Concatenating strings is ugly
- Traditional SQL Builders are not intuitive.
- ORMs are not intuitive, and have poor performance.

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

## What about SQL injection?
As long as you don't take user input as a parameter,
there will be no SQL injection vulnerability.
