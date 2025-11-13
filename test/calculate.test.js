import { describe, it, expect } from 'vitest';
import { calculate } from '../utils/calculate';

describe('calculate util', () => {
  it('adds two numbers', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(calculate(5, 2, '-')).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(calculate(4, 3, 'x')).toBe(12);
    expect(calculate(4, 3, '*')).toBe(12);
  });

  it('divides two numbers', () => {
    expect(calculate(10, 2, '/')).toBe(5);
  });

  it('divides by zero returns Infinity (JS behavior)', () => {
    expect(calculate(1, 0, '/')).toBe(Infinity);
  });

  it('returns current for unknown op', () => {
    expect(calculate(1, 2, '%')).toBe(2);
  });
});
