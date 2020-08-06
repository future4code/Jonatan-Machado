import { CommercialClient } from '../../class/CommercialClient';

const CommercialClientSut = new CommercialClient(
  'Jonatan', //name
  90, //registrationNumber
  1000, //consumo
  'XXXXXXXXXXXXXX', // cnpj
  10, //andar
  '99999999', // cep
);

describe('class CommercialClient', () => {
  it('should show the customer´s name', () => {
    expect(CommercialClientSut.name).toBe('Jonatan');
  });

  it('should show the record number', () => {
    expect(CommercialClientSut.registrationNumber).toBe(90);
  });

  it('should show the number of consumption', () => {
    expect(CommercialClientSut.consumedEnergy).toBe(1000);
  });

  it('should show the cnpj number', () => {
    expect(CommercialClientSut.getCnpj()).toBe('XXXXXXXXXXXXXX');
  });

  it('should show the floor number', () => {
    expect(CommercialClientSut.floorsQuantity).toBe(10);
  });

  it('should show cep number', () => {
    expect(CommercialClientSut.getCep()).toBe('99999999');
  });
  it('should show the result of the consumption calculation', () => {
    expect(CommercialClientSut.calculateBill()).toBe(530);
  });
});
