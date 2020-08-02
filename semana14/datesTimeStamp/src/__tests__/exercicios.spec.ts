import moment from 'moment';
import { ReadEvent } from '../exercicio2';
import { printAllEvents } from '../exercicio3';
import { createEvent } from '../exercicio4';
const event = [
  {
    name: 'Reuniãozinha',
    description: 'Reunião não muito importante',
    startAt: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
    finishAt: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
  },
  {
    name: 'Reuniãozinha',
    description: 'Reunião não muito importante',
    startAt: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
    finishAt: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
  },
];

describe('Exercicio2', () => {
  it('should show the registered events', () => {
    expect(ReadEvent(event)).toBe(
      `Nome: Reuniãozinha\n Horário de início: Fri Jun 26 2020 17:00:00 GMT-0300\n Horário de fim: Fri Jun 26 2020 18:00:00 GMT-0300\n Descrição: Reunião não muito importante`,
    );
  });
});

describe('Exercicio 3', () => {
  it('should show the duration of the event and how much time is left', () => {
    expect(printAllEvents(event)).toBe(`Nome: Reuniãozinha
    Horário de início: Sexta-feira, 26 54 junho 54 2020, 17:00
    Horário de fim: 26 54 junho 54 2020, 18:00
    Descrição: Reunião não muito importante
    Duração: 60 minutos
    Dias até o evento: -33`);
  });
});

describe('Exercicio 4', () => {
  it('should show error for leaving the name empty', () => {
    expect(
      createEvent(
        '',
        'teste',
        moment('26/06/2020 17:00'),
        moment('29/06/2020 17:00'),
      ),
    ).toBe(undefined);
  });
  it('should show error for leaving the description empty', () => {
    expect(
      createEvent(
        'Paulo',
        '',
        moment('26/06/2020 17:00'),
        moment('29/06/2020 17:00'),
      ),
    ).toBe(undefined);
  });
  it('should show error for leaving the start date empty', () => {
    expect(
      createEvent('Paulo', 'teste', moment(''), moment('29/06/2020 17:00')),
    ).toBe(undefined);
  });
  it('should show error for leaving the end date empty', () => {
    expect(
      createEvent('Paulo', 'teste', moment('29/06/2020 17:00'), moment('')),
    ).toBe(undefined);
  });
  it('should show error for leaving the end date empty', () => {
    expect(
      createEvent(
        'Paulo',
        'teste',
        moment('22/05/2020 17:00'),
        moment('20/05/2020 17:00'),
      ),
    ).toBe('erro');
  });
});
