/* 
Exercício 1: 
Pega um número que o usuario digitar, converte ele de string para number e 
depois verifica se eles são pares.
*/

const respostaDoUsuario = prompt("Digite o número que você quer testar?");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste."); // se os números forem pares
} else {
  console.log("Não passou no teste."); // se os números forem impar
}

/* =======================================================================
Exercício 2: 
A) para saber qual fruta o usuário escolheu
B) será "O preço da fruta Maçã é R$ 2.25"
C) Total: R$ 25.55
D) Ele passaria para o proximo que é o defaul e traria ele como resultado.
*/

let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

/* =======================================================================
Exercício 3: 
Daria erro porque o let mensagem está dentro do bloco do if e o console.log com
a let mensagem está fora, sendo assim não declarada, colocando para dentro rodaria.
dando como resultado (escolhendo 3 e 4) o else "nº 1 é menor ou igual ao 2"
*/

const numero1 = prompt("Digite o primeiro número.");
const numero2 = prompt("Digite o próximo número?");

if (numero1 > 0 && numero2 > 0) {
  let mensagem;
  if (numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!";
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!";
  }
}
console.log(mensagem);
/* =======================================================================
Exercício 4: 
a. ele cairá no else dando como o 2 sendo maior
b. ele cairá no else dando como o tercei sendo maior
*/
const number1String = prompt("Digite o primeiro número:");
const number2String = prompt("Digite o segundo número:");
const number3String = prompt("Digite o terceiro número:");

const number1 = Number(number1String);
const number2 = Number(number2String);
const number3 = Number(number3String);

if (number1 !== number2 || number2 !== number3 || number1 !== number3) {
  if (number1 > number2 && number2 > number3) {
    console.log(number1 + " " + number2 + " " + number3);
  } else if (number1 < number2 && number1 > number3) {
    console.log(number2 + " " + number1 + " " + number3);
  } else if (number1 < number2 && number1 < number3 && number2 > number3) {
    console.log(number2 + " " + number3 + " " + number1);
  } else if (number1 < number2 && number2 < number3) {
    console.log(number3 + " " + number2 + " " + number1);
  } else {
    console.log(number1, number2, number3);
  }
} else {
  console.log("Números iguais, por favor colocar ao menos um diferente");
}

/* =======================================================================
Exercício 5 b: 
*/
let option = prompt("Seu animal é vertebrado?");
let optionLower = option.toLowerCase();
if (optionLower === "sim") {
  option = prompt("Seu animal possui pelos");
  if (optionLower === "não") {
    option = prompt("Possui penas?");
    if (optionLower === "não") {
      option = prompt("É terrestre?");
      if (optionLower === "sim") {
        option = prompt("Possui Pulmão");
        if (optionLower === "sim") {
          console.log("Terrestre");
        } else {
          console.log("Anfíbio");
        }
      } else {
        console.log("Peixe");
      }
    } else {
      console.log("é uma ave");
    }
  } else {
    option = prompt("Seu animal é racional?");
    if (optionLower === "não") {
      console.log("É um animal");
    } else {
      console.log("É um ser humano");
    }
  }
} else {
  console.log("Seu animal é invertebrado");
}

/*
LINK DO DRIVE
https://drive.google.com/file/d/1mpJ8bOrja-1VUWHt8nUCLEcFLtbvzrIa/view?usp=sharing
*/
