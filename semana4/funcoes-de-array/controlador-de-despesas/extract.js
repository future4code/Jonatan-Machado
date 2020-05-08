const extract = (data) => {
  clear();
  data.map((datas) => {
    return (document.getElementById('detailsExtract').innerHTML += `
        <li>${datas.description} | R$ ${datas.value} | ${datas.option}</li>
      `);
  });
};

const SumValue = (data) => {
  let sumTotal = data.reduce((sum, dataValue) => {
    let total = parseInt(sum) + parseInt(dataValue.value);
    console.log(total);
    clearValue();
    return (document.getElementById('totalValue').innerHTML += `
      ${total}
    `);
  }, 0);
};

const clear = () => {
  document.getElementById('detailsExtract').innerHTML = '';
};

const clearValue = () => {
  document.getElementById('totalValue').innerHTML = '';
};
