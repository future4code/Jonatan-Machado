export const sum = (number1: number, number2: number): Number => {
  return number1 + number2;
};

export const subtraction = (number1: number, number2: number): Number => {
  return number1 - number2;
};

export const multiplication = (number1: number, number2: number): Number => {
  return number1 * number2;
};

export const biggestNumber = (number1: number, number2: number): Number => {
  if (number1 > number2) {
    return number1;
  } else if (number1 === number2) {
    return number1;
  } else {
    return number2;
  }
};
