/*====================================================================  
EXERCÍCIO 
1.Leia o código abaixo. Indique todas as mensagens impressas no console.
====================================================================== */

const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2 && bool3;
console.log("a. ", resultado); // a. false

resultado = (bool2 || bool1) && !bool3;
console.log("b. ", resultado); //b. false

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado); //c. true

resultado = resultado && (!bool1 || bool2) && !bool3;
console.log("d. ", resultado); // d. false

console.log("e. ", typeof resultado); //e. boolean

/*==================================================================== 
EXERCÍCIO 
2.Leia o código abaixo. Indique todas as mensagens impressas no console.
======================================================================*/

let array;
console.log("I. ", array); // undefined

array = null;
console.log("II. ", array); // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("III. ", array.length); //11

let i = 0;
console.log("IV. ", array[i], " e ", array[i + 1]); //3 e 4

array[i + 1] = 19;
const valor = array[i + 6];
console.log("V. ", array[i + 1], " e ", valor); // 19 e 9

i += 1;
array[i] = array[i - 1];
console.log("VI. ", array[i]); // 3

i = array.length - 1;
array[i] = array[i - 3];
const resultadoC = array[i] % array[1];
console.log("VII. ", resultadoC); // 1

/* RESPOSTA
A) array é um vetor que pode armazenar diversos tipos de dados, 
sintaxe:
let array = []

B) index inicial de um array é o index 0

C) usando a propriedade lenght exemplo:
array.length

D) está comentada no código
*/
