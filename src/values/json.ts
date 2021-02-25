import { text } from '@values/text'

export function json(json: object): string {
  return text(JSON.stringify(json))
}
