const fullName = prompt("Digite seu nome completo");
const typeOfGame = prompt(
  "Qual tipo de jogo: IN - Internacional / DO - doméstico"
);
const gameStep = prompt("SF) Semi final / DT) 3º lugar / FI) Final");
const category = prompt("Qual categoria? ");
const ticketAmount = prompt("Quantos? ");

//conversão de dados
const typeOfGameToLower = typeOfGame.toLowerCase();
const gameStepToLower = gameStep.toLowerCase();
const numberCategory = Number(category);
const numberTicketAmount = Number(ticketAmount);
let money;

//DOMESTICO
if (typeOfGameToLower === "do") {
  //SEMI FINAL
  if (gameStepToLower === "sf") {
    if (numberCategory === 1) {
      money = 1320 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 1320 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 2) {
      money = 880 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 880 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 3) {
      money = 550 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 550 \n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 220 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 220 \n
        Valor Total: R$ ${money}
        `
      );
    }

    //3ª LUGAR
  } else if (gameStepToLower === "dt") {
    if (numberCategory === 1) {
      money = 660 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 660 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 2) {
      money = 440 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 440 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 3) {
      money = 330 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 330 \n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 170 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 170 \n
        Valor Total: R$ ${money}
        `
      );
    }
    //fINAL
  } else {
    if (numberCategory === 1) {
      money = 1320 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 1320 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 2) {
      money = 880 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 880 \n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 3) {
      money = 550 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 550 \n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 220 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: 220 \n
        Valor Total: R$ ${money}
        `
      );
    }
  }
  //INTERNACIONAL
} else if (gameStepToLower === "in") {
  //SEMI FINAL
  if (gameStepToLower === "sf") {
    if (category === 1) {
      money = 1320 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${1320 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (category === 2) {
      money = 880 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${880 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (category === 3) {
      money = 550 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${550 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 220 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${220 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    }

    //3ª LUGAR
  } else if (gameStepToLower === "dt") {
    if (category === 1) {
      money = 660 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${660 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (category === 2) {
      money = 440 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${660 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (category === 3) {
      money = 330 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${330 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 170 * numberTicketAmount;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${170 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    }
    //fINAL
  } else {
    if (numberCategory === 1) {
      money = 1320 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${1320 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 2) {
      money = 880 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${1320 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else if (numberCategory === 3) {
      money = 550 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${550 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    } else {
      money = 220 * numberTicketAmount * 4.1;
      console.log(
        `--- Dados da Compra ---\n
        Nome do cliente: ${fullName}\n
        Tipo de Jogo: ${typeOfGameToLower}\n
        Etapa do Jogo: ${gameStepToLower}\n
        Categoria: ${numberCategory}\n
        Quantidade: ${numberTicketAmount} ingressos\n
        -- Valores --\n
        Valor do ingresso: R$: ${220 * numberTicketAmount}\n
        Valor Total: R$ ${money}
        `
      );
    }
  }
} else {
  console.log("Comando inválido");
}
