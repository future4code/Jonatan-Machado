import { IndustrialClient } from '../../class/IndustrialClient';

const IndustrialClientSut = new IndustrialClient(
  'Jonatan',
  90,
  800,
  '90A',
  100,
  '00000000',
);
describe('class IndustrialClient', () => {
  it('should show the customer´s name', () => {
    expect(IndustrialClientSut.name).toBe('Jonatan');
  });

  it('should show the registration number', () => {
    expect(IndustrialClientSut.registrationNumber).toBe(90);
  });

  it('should show the number of energy consumption', () => {
    expect(IndustrialClientSut.consumedEnergy).toBe(800);
  });

  it('should show the industrial number', () => {
    expect(IndustrialClientSut.getIndustryNumber()).toBe('90A');
  });

  it('should show the number of machines', () => {
    expect(IndustrialClientSut.machinesQuantity).toBe(100);
  });

  it('should show the zip code number', () => {
    expect(IndustrialClientSut.getCep()).toBe('00000000');
  });

  it('should show the result of the invoice calculation', () => {
    expect(IndustrialClientSut.calculateBill()).toBe(10360);
  });
});
