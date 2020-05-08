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
/* function itemArray(array) {
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

itemArray(arrayNumbers); */

/*================================================================== 
2 -  
a)false 
b) false
c)true
d)true
e)true
====================================================================*/

/*================================================================== 
3 - não funciona, pois está multiplicando por 2 o i que começa com 0 e como ele
só sai do lopp quando o i for maior que o quantidadeDeNumerosPares gerando assim um 
loop infinito
====================================================================*/
/* const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
  i++;
} */

/*================================================================== 
4 - 
====================================================================*/
/* 
const checkTrigonometri = (side1, side2, side3) => {
  if (side1 === side2 && side2 === side3) {
    console.log('Equilátero');
  } else if (
    (side1 === side3 && side3 !== side2) ||
    (side1 === side2 && side3 !== side1) ||
    (side3 === side2 && side2 !== side1)
  ) {
    console.log('Isóceles');
  } else {
    console.log('Escaleno');
  }
};

checkTrigonometri(2, 1, 3);
 */

/*================================================================== 
5 - 
====================================================================*/
/* const numerDivisible = (number1, number2) => {
  let big = 0;
  let small = 0;
  if (number1 > number2) {
    big = number1;
    small = number2;
    console.log(`maior número é o: ${big}`);
  } else if (number1 < number2) {
    big = number2;
    small = number1;
    console.log(`maior número é o: ${big}`);
  } else {
    big = number1;
    small = number1;
    console.log(`Os números são iguais`);
  }
  if (big % 2 === 0) {
    console.log(`${big} é divisivel por ${small}`);
  } else {
    console.log(`${big} não é divisivel por ${small}`);
  }

  console.log(`A difrença entre ele é ${big - small}`);
};

numerDivisible(1, 1);
 */

/*================================================================== 
EXERCICIO DE  FUNÇÕES

1 - Escreva uma função que receba um `array` de números e imprima na tela o 
segundo maior e o segundo menor número. Em seguida, invoque essa função.
====================================================================*/
/* const arrayMaxMin = () => {
  let arr = [5, 3, 1, 4, 2];
  arr.sort(function (a, b) {
    return a - b;
  });
  let second = arr.length - 2;

  console.log(`O segundo menor é ${arr[1]} e o segundo maior é ${arr[second]}`);
};

const alertLabebu = () => {
  alert('Hello Labenu!');
  arrayMaxMin();
}; */
