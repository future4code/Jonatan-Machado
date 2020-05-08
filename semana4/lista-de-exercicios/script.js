/*================================================================== 
EXERCICIO DE INTERPRATAÇÃO DE CÓDIGO

1 - pega o valor do dólar que tu digitar e converte para o valor valor que temos
em dolar que nesse caso é 100, temos uma constante que pega o valor digitado convertendo
em number e nos retorna esse valor multiplicado pela cotação que digitamos no inicio, nos
retornando no console o resultado

2 - pega o dinheiro que temos e aplica multiplicando ele pelo valor do tipo de investimento 
que queremos fazer, caso seja algum que não esteja cadastrado nos retorna dizendo "tipo de investimento incorreto", 
nesse caso temos duas constante chamado novoMontante e segundoMontante que chamam a função investeDinheiro
recebendo como parametros o tipo de investimento que queremos fazer e o valor para investir, nesse caso a primeira constante
irá nos retornar 165 e na segunda constante irá retornar "tipo de investimento informado incorreto"

3 - temos 3 array sendo 1 com 14 numeros e 2 vazios, temos um for que pega esse array com os numeros
percorre por ele verificando quais são pares e salva no array1 e os impar no array2 finalizando ele
printa no console o tamanho do array com 14 numeros e depois mostra o tamanho do array impar e do array par.

4 - pega o array de numeros e percorre em um loop verificando qual o menor numero salvando na varialve 
numero1 e verificando qual o maior numero e colocando na variavel numero2, por ultimo printando eles no console
====================================================================*/

/*================================================================== 
EXERCICIO DE LÓGICA DE PROGRAMAÇÃO

1 -  for of, map e foreach
====================================================================*/
function itemArray(array) {
  let firstItem = [];
  let secondItem = [];
  let thirdItem = [];

  for (item of array) {
    firstItem.push(item);
  }

  array.map((index) => {
    secondItem.push(index);
  });

  array.forEach((element) => {
    thirdIteration.push(element);
  });

  console.log(`1: ${firstIteration} \n 2: ${secondItem} \n  3: ${thirdItem}`);
}

itemArray(arrayNumbers);

/*================================================================== 
2 -  
a) 
====================================================================*/
