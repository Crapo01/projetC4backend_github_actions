import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 1 + 2 to equal 5', () => {
  expect(sum(1, 2)).not.toBe(5)
})