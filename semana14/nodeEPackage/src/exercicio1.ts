//A - Usando o process.argv

/* B - Crie um programa que receba seu nome e sua idade. 
Após receber estes valores, imprima no console uma mensagem 
que siga a seguinte estrutura:
      "Olá, (Nome)! Você tem (sua idade) anos."
*/

export const PegaNomeEIdade = (name: string, age: number) => {
  const response = `olá, ${name}! você tem ${age} anos. Em sete anos você terá ${
    age + 7
  }`;
  console.log(response);
  return response;
};

PegaNomeEIdade(process.argv[2], Number(process.argv[3]));
