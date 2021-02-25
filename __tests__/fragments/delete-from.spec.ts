import { DELETE_FROM, DeleteFrom } from '@fragments/delete-from'

describe('DELETE_FROM(table: string) => DeleteFrom', () => {
  it('return DeleteFrom', () => {
    const result = DELETE_FROM('my_table')

    expect(result).toBeInstanceOf(DeleteFrom)
    expect(`${result}`).toBe('DELETE FROM my_table')
  })
})
