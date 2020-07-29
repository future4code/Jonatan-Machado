import { PegaNomeEIdade } from '../src/exercicio1';
import { chooseMathematicaOperation } from '../src/exercicio2';
import { createTask } from '../src/exercicio3';

describe('Exercicio 1', () => {
  it('this should show error for leaving empty name', () => {
    const Name = '';
    const Age = 27;
    const result = PegaNomeEIdade(Name, Age);
    expect(result).toBe('Error for leaving empty name');
  });

  it('should show error for passing string at age', () => {
    const Name = 'jonatan';
    const Age = NaN;
    const result = PegaNomeEIdade(Name, Age);
    expect(result).toBe('Error for passing string at age');
  });

  it('should show the name entered and the age seven years from now', () => {
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

describe('exercicio3', () => {
  it('should show error for passing empty parameter', () => {
    const result = createTask('', 'comprar leite');
    expect(result).toBe('empty parameter error');
  });
  it('should show error for passing undefined parameter', () => {
    const result = createTask(undefined, 'comprar leite');
    expect(result).toBe('undefined parameter error');
  });
  it('should show message done', () => {
    const result = createTask('tarefa.txt', 'comprar leite');
    expect(result).toBe('feito');
  });
});
