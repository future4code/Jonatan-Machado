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
a)false 
b) false
c)true
d)true
e)true
====================================================================*/

/*================================================================== 
3 - não funciona, pois está multiplicando por 2 o i que começa com 0 e como ele
só sai do lopp quando o i for maior que o quantidadeDeNumerosPares gerando assim um 
loop infinito, colocado uma condição para verificar o numero par e imprimir na tela
====================================================================*/

const quantidadeDeNumerosPares = (number) => {
  let i = 0;
  while (i < number) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
};
quantidadeDeNumerosPares(5);

/*================================================================== 
4 - 
====================================================================*/
 
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


/*================================================================== 
5 - 
====================================================================*/
 const numerDivisible = (number1, number2) => {
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
 

/*================================================================== 
EXERCICIO DE  FUNÇÕES

1 - Escreva uma função que receba um `array` de números e imprima na tela o 
segundo maior e o segundo menor número. Em seguida, invoque essa função.
====================================================================*/
 const arrayMaxMin = () => {
  let arr = [5, 3, 1, 4, 2];
  arr.sort(function (a, b) {
    return a - b;
  });
  let second = arr.length - 2;

  console.log(`O segundo menor é ${arr[1]} e o segundo maior é ${arr[second]}`);
};

arrayMaxMin.


const alertLabebu = () => {
  alert('Hello Labenu!');
  arrayMaxMin();
}; 
/*================================================================== 
EXERCICIO DE  OBJETOS

1 - usamos arrays quando queremos gravar diversos dados dentro de uma variavel apenas,
com objetos conseguimos gravar alem de diversos dados, podemos criar eles com diversas características,
dessa forma podemos abstrair mais usando um objeto dentro de um array, deixando mais facil de ser manipulado.

2-
====================================================================*/
const crieRetangulo = (lado1, lado2) => {
  let retangulo = {};
  retangulo.lado1 = lado1;
  retangulo.lado2 = lado2;
  retangulo.perimetro = 2 * (lado1 + lado2);
  retangulo.area = lado1 * lado2;
  console.log(retangulo);
};

crieRetangulo(15, 2);



/* ========================================================================= 
 3 -
 ===========================================================================*/
let filme = [
  {
    nome: 'Interestelar',
    protagonista: 'Matthew McConaughey',
    atriz: 'Anne Hathaway',
    diretor: 'Christopher Nolan',
    ano: '2014',
    IMDb: '8,6',
  },
];
console.log(
  `Venha assistir ao clássico ${filme[0].nome}, de ${filme[0].ano}. Protagonizado por ${filme[0].protagonista},do diretor ${filme[0].diretor}. Uma das atrizer é nada mais do  que a ${filme[0].atriz}! Tem a nota ${filme[0].IMDb} no IMDb.\n\n`
); 

/* ========================================================================= 
 4 -
 ===========================================================================*/
 let pessoa = {
  nome: ' Samuel Hazo',
  idade: 54,
  endereco: 'estados unidos',
  email: 'samuel@hazo.com',
};

function esconderPessoa(object) {
  object.nome = object.nome.replace(/[a-z]/gi, 'Anonimo');
  object.endereco = object.endereco.replace(' Anonimo', '');
  object.email = 'Anonimo';
  console.log(object);
}

esconderPessoa(pessoa); 

/*================================================================== 
EXERCICIO DE FUNÇÕES DE ARRAY
1-
====================================================================*/
 let pessoas = [
  {
    nome: "Pedro",
    idade: 20,
  },
  {
    nome: "João",
    idade: 10,
  },
  {
    nome: "Paula",
    idade: 12,
  },
  {
    nome: "Artur",
    idade: 89,
  },
];

let adultos = pessoas.filter((index) => {
  if (index.idade >= 20) {
    return true;
  }
});

let novos = pessoas.filter((index) => {
  if (index.idade < 20) {
    return true;
  }
});

console.log(adultos);
console.log(novos);
 
/*================================================================== 
2-
====================================================================*/

const array = [1, 2, 3, 4, 5, 6];

let mapPorDois = testArray.map((arg) => {
  return arg * 2;
});

let mapPorString = array.map((arg) => {
  return (arg * 3).toString();
});

let mapParImpar = array.map((arg) => {
  if (arg % 2 === 0) {
    return `${arg} é par`;
  } else {
    return `${arg} é ímpar`;
  }
});

console.log(mapPorDois);
console.log(mapPorString);
console.log(mapParImpar);
 

/*================================================================== 
3-
====================================================================*/
 const pessoasParque = [
  {
    nome: 'Paula',
    idade: 12,
    altura: 1.8,
  },
  {
    nome: 'João',
    idade: 20,
    altura: 1.3,
  },
  {
    nome: 'Pedro',
    idade: 15,
    altura: 1.9,
  },
  {
    nome: 'Luciano',
    idade: 22,
    altura: 1.8,
  },
  {
    nome: 'Artur',
    idade: 10,
    altura: 1.2,
  },
  {
    nome: 'Soter',
    idade: 70,
    altura: 1.9,
  },
];

let permitido = pessoasParque.filter((arg) => {
  if (arg.idade > 14 && arg.altura > 1.5 && arg.idade < 60) {
    return true;
  }
});

let naoPermitido = pessoasParque.filter((arg) => {
  if (arg.idade < 14 || arg.idade > 60) {
    return true;
  } else if (arg.altura < 1.5) {
    return true;
  }
});

console.log(permitido);
console.log(naoPermitido);

/*================================================================== 
4-
====================================================================*/
const consultas = [
  {
    promtrat: 'Sr.',
    promF: 'lo',
    nome: 'João',
    genero: 'masculino',
    cancelada: true,
    dataDaConsulta: '01/10/2019',
  },
  {
    promtrat: 'Sr.',
    promF: 'lo',
    nome: 'Pedro',
    genero: 'masculino',
    cancelada: false,
    dataDaConsulta: '02/10/2019',
  },
  {
    promtrat: 'Sra.',
    promF: 'la',
    nome: 'Paula',
    genero: 'feminino',
    cancelada: true,
    dataDaConsulta: '03/11/2019',
  },
  {
    promtrat: 'Sra.',
    promF: 'la',
    nome: 'Márcia',
    genero: 'feminino',
    cancelada: false,
    dataDaConsulta: '04/11/2019',
  },
];

let emailConfirma = consultas.map((arg) => {
  return `Olá, ${arg.promtrat}${arg.nome}. Estamos enviando esta mensagem para lembrá-${arg.promF} da sua consulta no dia ${arg.dataDaConsulta}.Por favor, acuse o recebimento deste e - mail.`;
});

let emailCancelar = consultas.map((arg) => {
  return `Olá, ${arg.promtrat}${arg.nome}. Infelizmente, sua consulta marcada para o dia ${arg.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá - la`;
});

console.log(emailConfirma);
console.log(emailCancelar);

/*================================================================== 
5-
====================================================================*/
const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function balanco(array) {
  for (items in contas) {
    array[items].saldoTotal -= array[items].compras.reduce((a, b) => a + b, 0);
    console.log(array[items]);
  }
}

console.log(balanco(contas));