import { PegaNomeEIdade } from '../src/exercicio1';

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
