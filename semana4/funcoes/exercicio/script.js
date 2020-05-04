/* ===================================================================
1 -
a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
será um array vazio

b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
será [0,1,0,1,2,3]

c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
será [0,1,0,1,2,3,0,1,2,3,4,5]
============================================================================*/

const minhaFuncao = (quantidade) => {
	const array = []
	for (let i = 0; i < quantidade; i += 2) {
		for (let j = 0; j < i; j++) {
			array.push(j)
		}
	}
	return array
}

console.log(minhaFuncao(8))

/* ===================================================================
2 -
a. Explicite quais são as saídas impressas no console
as saídas impressas são os números do index(posição) do arrayn onde o nome pesquisado na função se encontra.

b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)
e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
sim funcionaria, pois o array aceita números também e ele está verificando dentro do array os dados que tu pediu, então
se o número se encontra no array, ele irá mostrar a posição correspondente.
============================================================================*/

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
	for (let i = 0; i < lista.length; i++) {
		if (lista[i] === nome) {
			return i;
		}
	}
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

/* ===================================================================
3 -O código abaixo mostra uma função que recebe um array e devolve outro array. 
Explique rapidamente o que ela faz e sugira um nome melhor para ela!

ele tem um param em array para receber, onde ele irá ira dar um loop para percorrer,
salvando na variavel resultadoA uma soma pelo index e na variavel resultadoB ele multiplica
function arrayDeSomarParMulplicaImpar
 ===================================================================*/
function metodo(array) {
	let resultadoA = 0;
	let resultadoB = 1;
	let arrayFinal = [];

	for (let x of array) {
		resultadoA += x;
		resultadoB *= x;
	}

	arrayFinal.push(resultadoA);
	arrayFinal.push(resultadoB);
	return arrayFinal;
}
/* ===================================================================
4 - Escreva as funções explicadas abaixo:

a. A função deve receber um número correspondente aos "anos humanos" 
que um cachorro tem e calcular a "idade de cachorro"
dele. Considere que 1 ano humano equivale a 7 anos de cachorro
 ===================================================================*/

let anoDeCachorro = (idade) => {
	let idadeHumano = idade * 7

	return idadeHumano
}

let conversorDeIdade = anoDeCachorro(2)

console.log(`Equivale a ${conversorDeIdade} anos da idade humana`);

/* ===================================================================
5 - O propósito desse exercício é que você determine a qual século um ano pertence. 
Para isso, considere as seguintes afirmações:

1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, 
	pode implementar para um intervalo maior)
2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século 
[SÉCULO EM ALGARISMOS ROMANOS]`
    - Algarismos Romanos
3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor
 ===================================================================*/

let conversorDeSeculo = (anos) => {
	if (anos > 1000 && anos <= 2020) {
		if (anos > 1000 && anos <= 1100) {
			return console.log(`os anos ${anos} pertence ao século XI`);
		} else if (anos >= 1101 && anos <= 1200) {
			return console.log(`os anos ${anos} pertence ao século XII`);
		} else if (anos >= 1201 && anos <= 1300) {
			return console.log(`os anos ${anos} pertence ao século XIII`);
		} else if (anos >= 1301 && anos <= 1400) {
			return console.log(`os anos ${anos} pertence ao século XIV`);
		} else if (anos >= 1401 && anos <= 1500) {
			return console.log(`os anos ${anos} pertence ao século XV`);
		} else if (anos >= 1501 && anos <= 1600) {
			return console.log(`os anos ${anos} pertence ao século XVI`);
		} else if (anos >= 1601 && anos <= 1700) {
			return console.log(`os anos ${anos} pertence ao século XVII`);
		} else if (anos >= 1701 && anos <= 1800) {
			return console.log(`os anos ${anos} pertence ao século XVIII`);
		} else if (anos >= 1801 && anos <= 1900) {
			return console.log(`os anos ${anos} pertence ao século XIX`);
		} else if (anos >= 1901 && anos <= 2000) {
			return console.log(`os anos ${anos} pertence ao século XX`);
		} else if (anos >= 2001 && anos < 2100) {
			return console.log(`os anos ${anos} pertence ao século XXI`);
		}

	} else {
		console.log('Anos informado incorretamente, favor informar no intervalos de 1000 d.c à 2020 d.c');
	}
}

conversorDeSeculo(2000);

/* ===================================================================
6 - Para os itens a seguir, considere o seguinte array para os seus testes:

a. Escreva uma função que receba um array de números e devolva a quantidade de
elementos nele

==============================================================================*/
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let methodArrayElement = (array) => {
	let arrayData = [];
	for (let data of array) {
		arrayData.push(data)
	}
	return arrayData.length;
}
console.log(methodArrayElement(array))

/* ============================================================================

b. Escreva uma função que receba um número e devolva um booleano indicando se
ele é par ou não
=============================================================================== */
let evenOrOdd = (array) => {
	if (number % 2 === 0) {
		return true
	} else {
		return false
	}
}
console.log(OddOrEven(2))

/* ============================================================================

c. Escreva uma função que receba um array de números e devolva a quantidade de
números pares dentro dele
=============================================================================== */
function arrayNumber(array) {
	let response = 0
	for (let number of array) {
		if (number % 2 === 0) {
			response++
		}
	}
	return console.log(`Nessa array existem ${response} números pares`)
}

console.log(arrayNumber(array))
/* ============================================================================

d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a
função do item b para verificar se o número é par
=============================================================================== */
function arrayNumber2(array) {
	let response = []
	for (let number of array) {
		if (number % 2 === 0) {
			response.push(`${number} >> true`)
		}
	}
	return console.log(`${response} \nNessa array existem ${response.length} números pares`)
}

console.log(arrayNumber2(array)) 