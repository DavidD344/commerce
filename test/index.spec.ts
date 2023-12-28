import { concat, double } from '@/main/utils'

describe('testing index file', () => {
  it('double function', () => {
    expect(double(5)).toBe(10)
  })

  it('concat function', () => {
    expect(concat('John', ' ', 'Wick')).toBe('John Wick')
  })
})
