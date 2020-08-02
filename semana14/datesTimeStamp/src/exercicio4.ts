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

export const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment,
) => {
  if (!name || !description || !startAt || !finishAt) {
    console.log('Invalid input');

    return undefined;
  }

  const diffStartAtAndToday = startAt.diff(moment(), 'seconds');
  const diffFinishAtAndToday = finishAt.diff(moment(), 'seconds');

  console.log(diffFinishAtAndToday);

  if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
    console.log('Date cannot be prior to the current date');
    return 'erro';
  }

  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
};

createEvent(
  process.argv[2],
  process.argv[3],
  moment(process.argv[4]),
  moment(process.argv[5]),
);
