import { Client } from './interfaces/Client';

const client: Client = {
  name: 'Goli',
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
