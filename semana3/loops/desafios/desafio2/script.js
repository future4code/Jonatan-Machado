let number1 = Number(prompt("Digite um numero: "));
alert("vamos jogar!");
for (i = 0; i >= 0; i++) {
  let number2 = Number(prompt("Advinhe o número: "));
  if (number1 === number2) {
    alert(`Você acertou! Deu ${i + 1} chutes`);
    break;
  } else if (number1 > number2) {
    alert(`Errrrrou! é maior\nseu número foi: ${number2}`);
  } else {
    alert(`Errrrrou! é menor\nseu número foi: ${number2}`);
  }
}
