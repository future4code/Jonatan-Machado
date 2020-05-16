const filterData = () => {
  event.preventDefault();
  optionChoice = document.getElementById('choicesOptions').value;
  minValue = document.getElementById('minValue').value;
  maxValue = document.getElementById('maxValue').value;

  let resultsData = [];

  const dataFilter = dataBaseDetails.filter((description) => {
    if (minValue != '' && maxValue != '') {
      if (
        description.option === optionChoice &&
        parseInt(description.value) >= parseInt(minValue) &&
        parseInt(description.value) <= parseInt(maxValue)
      ) {
        console.log(description.value);
        resultsData.push(description);
        mountHtml(resultsData);
      } else {
        document.getElementById('details').innerHTML = `
        <h1 style="color:red;">Não à nenhum registro</h1>
        `;
      }
    } else {
      alert('erro');
    }
  });
};

const mountHtml = (results) => {
  clearDetails();
  results.map((data) => {
    return (document.getElementById('details').innerHTML += `
    <p>${data.value}
    ${data.description}
    ${data.option}</p>
    `);
  });
};

const clearDetails = () => {
  document.getElementById('details').innerHTML = '';
};
