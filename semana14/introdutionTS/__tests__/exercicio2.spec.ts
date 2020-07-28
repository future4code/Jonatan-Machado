import obterEstatisticas from '../src/exercicio2';
import buscarPostsPorAutor from '../src/exercicio3';

describe('Exercicio2', () => {
  it('should be ordened number ', () => {
    const numbers = [1, 2, 3, 21, 23];

    const result = obterEstatisticas(numbers);

    expect(result).toEqual({ maior: 23, media: 10, menor: 1 });
  });
});

describe('exercicio3', () => {
  it('should be filter post of author', () => {
    const posts = [
      {
        autor: 'Alvo Dumbledore',
        texto: 'Não vale a pena viver sonhando e se esquecer de viver',
      },
      {
        autor: 'Severo Snape',
        texto: 'Menos 10 pontos para Grifinória!',
      },
      {
        autor: 'Hermione Granger',
        texto: 'É levi-ô-sa, não levio-sá!',
      },
      {
        autor: 'Dobby',
        texto: 'Dobby é um elfo livre!',
      },
      {
        autor: 'Lord Voldemort',
        texto: 'Avada Kedavra!',
      },
    ];
    const result = buscarPostsPorAutor(posts, 'Lord Voldemort');
    expect(result).toEqual([
      {
        autor: 'Lord Voldemort',
        texto: 'Avada Kedavra!',
      },
    ]);
  });
});
