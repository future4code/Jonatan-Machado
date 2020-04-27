/* A. Calcule e mostre o valor de 77°F em  K, mostrando a unidade 
no console também */
let grauF;
let grauK;
let grauC;

grauK = (77 - 32) * (5 / 9) + 273.15;
console.log("A) 77ºF em K é " + grauK);

/* B. Calcule e mostre o valor de 80°C em °F, mostrando a unidade 
no console também.*/

grauF = 80 * (9 / 5) + 32;
console.log("B) 80ºC em ºF é " + grauF);

/*C. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades 
no console também.*/
grauK = (30 - 32) * (5 / 9) + 273.15;
grauF = 30 * (9 / 5) + 32;
console.log("C) 30ºF em K é: " + grauK + "\n" + "30ºC em ºF é: " + grauF);

/*D. Altere o último item para que o usuário insira o valor em graus Celsius 
que ele deseja converter.*/
grauC = prompt("Digite um valor em Celsius que deseja converter: ");
grauF = grauC * (9 / 5) + 32;
alert("O resultado é: " + grauF + "ºC");
45;
console.log("o Resultador é: " + grauF);
