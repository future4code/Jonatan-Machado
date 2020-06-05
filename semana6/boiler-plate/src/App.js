import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filter: '',
  };
  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    this.setState({
      tarefas: JSON.parse(localStorage.getItem('tarefas')) || [],
    });
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  criaTarefa = (e) => {
    e.preventDefault();

    let novaTarefa = {};
    novaTarefa.id = Date.now();
    novaTarefa.texto = this.state.inputValue;
    novaTarefa.completa = false;

    this.setState({ tarefas: [...this.state.tarefas, novaTarefa] });
  };

  selectTarefa = (id) => {
    let mudaTarefa = this.state.tarefas.map((item) => {
      if (item.id === id) {
        let idAtual = id;
        return {
          completa: !item.completa,
          texto: item.texto,
          id: idAtual,
        };
      } else {
        return item;
      }
    });
    this.setState({
      tarefas: mudaTarefa,
    });
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
    console.log(event.target.value);
  };

  handleDelete = (id) => {
    let itemDelete = this.state.tarefas.map((item) => {
      if (item.id === id) {
        return {};
      } else {
        return item;
      }
    });
    this.setState({ tarefas: itemDelete });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filter) {
        case 'pendentes':
          return !tarefa.completa;
        case 'completas':
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className='App'>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            type='text'
            value={this.state.inputValue}
            onChange={this.onChangeInput}
          />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value=''>Nenhum</option>
            <option value='completas'>Completas</option>
            <option value='pendentes'>Pendentes</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button
                  onClick={() => this.handleDelete(tarefa.id)}
                  type='button'
                >
                  Remover
                </button>
              </>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
