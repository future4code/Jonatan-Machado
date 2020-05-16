function registerExpenses() {
  event.preventDefault();
  valueExpenses = document.getElementById('expenseValue').value;
  optionDescription = document.getElementById('choicesOptions').value;
  expenseDescription = document.getElementById('expenseDescription').value;

  if (valueExpenses === '' || expenseDescription === '') {
    alert('favor preencher os dados');
    return false;
  } else {
    console.log('cadastrado com sucesso!');
    dataExpenses(valueExpenses, optionDescription, expenseDescription);
  }
}

const dataBaseDetails = [];

const dataExpenses = (value, option, description) => {
  let expenses = {};
  expenses.value = value;
  expenses.option = option;
  expenses.description = description;
  dataBaseDetails.push(expenses);
  extract(dataBaseDetails);
  SumValue(dataBaseDetails);
  sortValue();
};
