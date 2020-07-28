function obterEstatisticas(number: number[]) {
  const numerosOrdenados = number.sort((a, b) => a - b);
  let soma = 0;

  for (let num of number) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[number.length - 1],
    menor: numerosOrdenados[0],
    media: soma / number.length,
  };

  return estatisticas;
}

export default obterEstatisticas;
