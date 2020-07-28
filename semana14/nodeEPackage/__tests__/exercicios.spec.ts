import { PegaNomeEIdade } from '../src/exercicio1';
import { chooseMathematicaOperation } from '../src/exercicio2';
describe('Exercicio 1', () => {
  it('this should show the name entered and the age seven years from now', () => {
    const Name = 'Jonatan';
    const Age = 27;
    const result = PegaNomeEIdade(Name, Age);
    expect(result).toBe(
      'olá, Jonatan! você tem 27 anos. Em sete anos você terá 34',
    );
  });
});

describe('exercicio2', () => {
  it('should show error when choosing invalid operation', () => {
    const result = chooseMathematicaOperation('pow', 2, 2);
    expect(result).toBe('option error invalidates');
  });
  it('should add two numbers', () => {
    const result = chooseMathematicaOperation('add', 2, 2);
    expect(result).toBe(4);
  });
  it('should subtract two numbers', () => {
    const result = chooseMathematicaOperation('sub', 2, 2);
    expect(result).toBe(0);
  });
  it('this should multiply two numbers', () => {
    const result = chooseMathematicaOperation('mult', 2, 2);
    expect(result).toBe(4);
  });
  it('should divide two numbers', () => {
    const result = chooseMathematicaOperation('div', 4, 2);
    expect(result).toBe(2);
  });
});
