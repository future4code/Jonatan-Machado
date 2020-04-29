/* 
Exercício 1: 
ele faz o i percorrer em um loop começando com 0 e indo até 14 e fazendo o let sum
somar o i + i e no final do loop ele mostra no console  105
*/
let sum = 0;
for (let i = 0; i < 15; i++) {
  sum += i;
}
console.log(sum);

/* =======================================================================
Exercício 2: 
a) o push adiciona no array novaLista um novo dado
b) [10, 15, 25, 30]
c) valor de 3 seria impresso os números que fossem divisivel de 3
ja com 4 seria os divisel por 4 no caso apenas 12
=========================================================================*/
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
const novaLista = [];
const numero = 3;
for (const item of lista) {
  if (item % numero === 0) {
    novaLista.push(item);
  }
}
console.log(novaLista);

/* =======================================================================
Exercício 3: 
a) Escreva um programa que devolva o maior e o menor números contidos 
no array original
=========================================================================*/
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let highCurrentNumber = array[0];
let lowcurrentNumber = array[0];

for (let number of array) {
  if (number > highCurrentNumber) {
    highCurrentNumber = number;
  }
  if (number < lowcurrentNumber) {
    lowcurrentNumber = number;
  }
}
console.log(
  `O maior numero é: ${highCurrentNumber} e o menor é ${lowcurrentNumber}`
);

/* =======================================================================
Exercício 3: 
b) Escreva um programa que devolva um novo array contendo todos os valores do 
array original divididos por 10.
=========================================================================*/
let numberTen = [];
for (let number of array) {
  numberTen.push(number / 10);
}
console.log(`Os números que são divididos por 10 é: ${numberTen}`);

/* =======================================================================
Exercício 3: 
c) Escreva um programa que devolva um novo array contendo, 
somente, os números pares do array original.
=========================================================================*/
let evenNumber = [];
for (let number of array) {
  if (number % 2 === 0) {
    evenNumber.push(number);
  }
}
console.log(`Os números pares são: ${evenNumber}`);

/* =======================================================================
Exercício 3: 
c) Escreva um programa que gere um novo array contendo strings, 
da seguinte forma: "O elemento do índex i é: numero"
=========================================================================*/
let element = [];
for (i = 0; i < array.length; i++) {
  element.push(`O elemento do index ${i}  é ${array[i]}`);
}
console.log(element);
