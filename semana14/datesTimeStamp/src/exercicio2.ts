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

export const ReadEvent = (allEvent: event[]) => {
  console.log(allEvent);
  return `Nome: ${allEvent[0].name}\n Horário de início: ${allEvent[0].startAt}\n Horário de fim: ${allEvent[0].finishAt}\n Descrição: ${allEvent[0].description}`;
};
