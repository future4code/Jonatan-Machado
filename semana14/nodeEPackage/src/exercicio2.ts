const choice = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

export const chooseMathematicaOperation = (
  choice: string,
  number1: number,
  number2: number,
) => {
  switch (choice) {
    case 'add':
      console.log(`Resposta:${number1 + number2}`);
      return number1 + number2;
    case 'sub':
      console.log(`Resposta:${number1 - number2}`);
      return number1 - number2;
    case 'mult':
      console.log(`Resposta:${number1 * number2}`);
      return number1 * number2;
    case 'div':
      console.log(`Resposta:${number1 / number2}`);
      return number1 / number2;
    default:
      return 'option error invalidates';
  }
};

chooseMathematicaOperation(choice, number1, number2);
