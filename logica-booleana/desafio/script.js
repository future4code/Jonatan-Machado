/* a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva
um programa que converta 20lb para kg. Imprima  a resposta no console da 
seguinte forma: 
20lb equivalem a X kg
*/
let kg = 20 * 2.2026;
console.log("A) 20lb equivalem a " + kg + "Kg");

/* b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. 
Imprima  a resposta no console da seguinte forma: 
10.5oz equivalem a X kg
*/
kg = 10.5 / 35.274;
console.log("B) 10.5oz equivalem a " + kg + "Kg");

/*c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
100mi equivalem a X m */
let metros = 100 / 0.00062137;
console.log("C) 100 milhas equivalem a " + metros + " metros");

/*d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  
a resposta no console da seguinte forma: */
metros = 50 / 3.2808;
console.log("D) 50 pés equivalem a " + metros + " metros");

/*e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l`*/
let l = 103.56 / 0.26417;
console.log("E) 103.56gal (USA)  equivalem a " + l + " litros");

/*f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um 
programa que converta 450xic para litro. Imprima  a resposta no console da 
seguinte forma: `450 xic equivalem a X l` */
l = 450 * 0.24;
console.log("F) 103.56gal (USA)  equivalem a " + l + " litros");

/*g. Escolha ao menos um dos itens anteriores e modifique o programa para 
que ele peça ao usuário o valor da unidade original antes de converter.  */

metros = prompt("Cite um valor em milhas para converter em metros");
resultado = metros / 0.00062137;
console.log("G) " + metros + " milhas equivalem a " + resultado + " metros");
