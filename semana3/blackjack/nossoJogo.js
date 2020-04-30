alert("Bem Vindo Ao jogo de Blackjack!");
let playerAValue = [];
let playerAText = [];
let playerBValue = [];
let playerBText = [];

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

  let totalA = playerAValue.reduce((total, numero) => total + numero, 0);
  let totalB = playerBValue.reduce((total, numero) => total + numero, 0);
  console.log(`Você tem ${playerAText} \ntotal:${totalA}`);
  console.log(`A casa tem ${playerBText} \ntotal:${totalB}`);

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
