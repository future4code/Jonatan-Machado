function createTask() {
  //variaves criadas para pegar o valor e zerar o input
  let newTask = document.getElementById('newTask').value;
  let clearInputTask = (document.getElementById('newTask').value = '');

  //variavel criada para pegar o valor do dia da semana
  let week = document.getElementById('dayWeek').value;

  //variavel criada para chamar a função que checa se o campo está vazio
  let verifyFieldEmpty = checkValueEmpty(newTask);

  if (verifyFieldEmpty == true) {
    switch (week) {
      case 'monday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="itemTask">${newTask} <button onclick="clearTask()" >Limpar a Tarefa!</button> </li>`;
        clearInputTask;
        break;

      case 'tuesday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li  id="itemTask">${newTask} <button onclick="clearTask()">Limpar a Tarefa!</button> </li> `;
        clearInputTask;
        break;
      case 'wednesday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="itemTask">${newTask}<button onclick="clearTask()">Limpar a Tarefa!</button>  </li> `;
        clearInputTask;
        break;
      case 'thursday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="itemTask">${newTask} <button onclick="clearTask()">Limpar a Tarefa!</button>  </li>`;
        clearInputTask;
        break;
      case 'friday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="itemTask">${newTask} <button onclick="clearTask()" >Limpar a Tarefa!</button> </li>`;
        clearInputTask;
        break;
      case 'saturday':
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="itemTask">${newTask} <button onclick="clearTask()">Limpar a Tarefa!</button>  </li>`;
        clearInputTask;
        break;
      default:
        document.getElementById(
          `${week}`
        ).innerHTML += `<li id="${newTask}">${newTask} </li>`;
        clearInputTask;
    }
  }
}

//função para verificar se o campo está vazio
let checkValueEmpty = (task) => {
  if (task == '') {
    alert('Favor preencher o campo!');
    document.getElementById('newTask').focus();
    return false;
  } else {
    return true;
  }
};

function clearTask() {
  let layer = document.getElementById(`${newTask}`);
  layer.style.display = 'none';
  layer.style.visibility = 'hidden';
}
