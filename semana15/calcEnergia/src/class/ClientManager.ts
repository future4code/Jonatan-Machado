import { Client } from '../interfaces/Client';

export class ClientManager {
  private clients: Client[] = [];
  private static registrationNumbers: number[] = [];

  getClientsQuantity = (): number => this.clients.length;

  calculateTotalIncome = (): number =>
    this.clients.reduce((arr, cur) => arr + cur.calculateBill(), 0);

  calculeteBillOfClient = (registrationNumber: number): number => {
    const client = this.clients.find(
      item => item.registrationNumber === registrationNumber,
    );
    if (client) return client.calculateBill();
    return 0;
  };

  deleteUser = (registrationNumber: number) => {
    const regIdx = this.clients.findIndex(
      item => item.registrationNumber === registrationNumber,
    );

    if (regIdx !== -1) this.clients.splice(regIdx, 1);

    return 'ok';
  };

  registerClient = (client: Client) => {
    if (
      !ClientManager.registrationNumbers.includes(client.registrationNumber)
    ) {
      ClientManager.registrationNumbers.push(client.registrationNumber);
      this.clients.push(client);
      return 'ok';
    }
  };

  printClients = () => {
    let response = {};
    this.clients.forEach(item => {
      response = `${item.name} - Registro: ${
        item.registrationNumber
      } - Energia: ${item.consumedEnergy} - Total: ${item.calculateBill()}`;

      return response;
    });
    return response;
  };
}
