/* =======================================================================
Desafio 1: 
Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 
o resultado seria 4 linhas de 0
=========================================================================*/

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
let quantidadeAtual = 0;
while (quantidadeAtual < quantidadeTotal) {
  let linha = "";
  for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
    linha += "0";
  }
  console.log(linha);
  quantidadeAtual++;
}
