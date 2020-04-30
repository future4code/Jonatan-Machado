alert("Bem Vindo Ao jogo de Blackjack!");
let playerAValue = [];
let playerAText = [];
let playerBValue = [];
let playerBText = [];

/* 
inicia a rodada comprando 2 cartas e colocando nos arrays 
separando por tipo e valor
*/
if (confirm("Inicar uma nova rodada?")) {
  for (let i = 0; i < 2; i++) {
    const cardPlayerA = comprarCarta();
    playerAText.push(cardPlayerA.texto);
    playerAValue.push(cardPlayerA.valor);
    console.log(`Você ` + playerAText[i], playerAValue[i]);
    const cardPlayerB = comprarCarta();
    playerBText.push(cardPlayerB.texto);
    playerBValue.push(cardPlayerB.valor);
    console.log(`A casa ` + playerBText[i], playerBValue[i]);
  }

  /* 
    pega a variavel totalA e atribui o valor do array PlayerAValue / PlayerBValue
    printando na tela os tipos e valor total
  */
  let totalA = playerAValue.reduce((total, numero) => total + numero, 0);
  let totalB = playerBValue.reduce((total, numero) => total + numero, 0);
  console.log(`Você tem ${playerAText} \ntotal:${totalA}`);
  console.log(`A casa tem ${playerBText} \ntotal:${totalB}`);

  /* 
    Verifica se estão com menos de 21 e oferece mais cartas, seguindo o fluxo

  */
  if (totalA < 21 && totalB < 21) {
    while (confirm("Quer comprar mais uma carta?")) {
      const cardPlayerA = comprarCarta();
      const cardPlayerB = comprarCarta();
      playerAText.push(cardPlayerA.texto);
      playerAValue.push(cardPlayerA.valor);
      playerBText.push(cardPlayerB.texto);
      playerBValue.push(cardPlayerB.valor);
      let totalA = playerAValue.reduce((total, numero) => total + numero, 0);
      let totalB = playerBValue.reduce((total, numero) => total + numero, 0);
      console.log(`As suas cartas são: ${playerAText} \ntotal: ${totalA}`);
      console.log(`As cartas da casa são: ${playerBText} \ntotal: ${totalB}`);

      /* 
        Verifica quem ganhou
      */
      if (totalA > 21 && totalB <= 21) {
        console.log("Você perdeu!\nAcasa sempre ganha!");
        break;
      } else if (
        (totalA <= 21 && totalB > 21) ||
        (totalA === 21 && totalB !== 21)
      ) {
        console.log("GANHADOR GANHADOR GALINHA PRO JANTAR!");
        break;
      } else if (
        (totalA === 21 && totalB === 21) ||
        (totalA > 21 && totalB > 21)
      ) {
        console.log("Empate!");
        break;
      }
    }
  }
} else {
  console.log("O jogo acabou ='( ");
}
