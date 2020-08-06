import { ClientManager } from '../../class/ClientManager';
import { ResidentialClient } from '../../class/ResidentialClient';

class ClientMock extends ResidentialClient {}

const clientMock = new ClientMock(
  'Jonatan',
  10,
  900,
  '00000000000',
  10,
  '99999999',
);

const sut = new ClientManager();

describe('', () => {
  it('should register a user', () => {
    expect(sut.registerClient(clientMock)).toBe('ok');
  });

  it('should show the amount of records', () => {
    expect(sut.getClientsQuantity()).toBe(1);
  });

  it('should show customers', () => {
    expect(sut.printClients()).toBe(
      'Jonatan - Registro: 10 - Energia: 900 - Total: 675',
    );
  });

  it('should should calculate the customer invoice', () => {
    expect(sut.calculeteBillOfClient(10)).toBe(675);
  });

  it('should return zero if there is no customer', () => {
    expect(sut.calculeteBillOfClient(0)).toBe(0);
  });

  it('should show the amount of records', () => {
    expect(sut.deleteUser(10)).toBe('ok');
  });
});
