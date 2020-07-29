import moment from 'moment';

type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

const allEvents: event[] = [
  {
    name: 'Reunião',
    description: 'Reunião muito importante',
    startAt: moment('25/06/2020 15:00', 'DD/MM/YYYY HH:mm'),
    finishAt: moment('25/06/2020 16:00', 'DD/MM/YYYY HH:mm'),
  },
  {
    name: 'Reuniãozinha',
    description: 'Reunião não muito importante',
    startAt: moment('26/06/2020 17:00', 'DD/MM/YYYY HH:mm'),
    finishAt: moment('26/06/2020 18:00', 'DD/MM/YYYY HH:mm'),
  },
];

moment.locale('pt');

export const printAllEvents = (allEvents: event[]) => {
  let response;
  allEvents.map((item: event) => {
    const duration = item.finishAt.diff(item.startAt, 'minutes');

    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, 'days');

    response = `Nome: ${item.name}
    Horário de início: ${item.startAt.format('dddd, DD de MMMM de YYYY, HH:mm')}
    Horário de fim: ${item.finishAt.format('DD de MMMM de YYYY, HH:mm')}
    Descrição: ${item.description}
    Duração: ${duration} minutos
    Dias até o evento: ${daysUntilEvent}`;
    return response;
  });
  return response;
};
