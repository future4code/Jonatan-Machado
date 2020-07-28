import { sum, subtraction } from '../src/exercicio5';
describe('exercicio 5', () => {
  it('should show the sum of two numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });
  it('should show the subtraction of two numbers', () => {
    expect(subtraction(1, 1)).toBe(0);
  });
});
