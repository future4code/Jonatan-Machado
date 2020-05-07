const filterData = () => {
  event.preventDefault();
  optionDescription = document.getElementById('choicesOptions').value;
  minValue = document.getElementById('minValue').value;
  maxValue = document.getElementById('maxValue').value;

  let dataFilter = dataBaseDetails.filter((description) => {
    if (minValue != '' && maxValue != '') {
      if (
        (description.option === optionDescription &&
          description.value == minValue) ||
        description.value == maxValue
      ) {
        return true;
      } else {
        console.log('não existe');
      }
    } else {
      alert('erro');
    }
  });

  console.log(dataFilter);
};
