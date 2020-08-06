import { ResidentialClient } from '../../class/ResidentialClient';

const ResidentialSut = new ResidentialClient(
  'Jonatan',
  10,
  900,
  '00000000000',
  10,
  '99999999',
);

describe('class Residence', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the name resident', () => {
    expect(ResidentialSut.name).toBe('Jonatan');
  });

  it('should show the record number', () => {
    expect(ResidentialSut.registrationNumber).toBe(10);
  });

  it('should show the consumed energy number', () => {
    expect(ResidentialSut.consumedEnergy).toBe(900);
  });

  it('should show the cpf code number', () => {
    expect(ResidentialSut.getCpf()).toBe('00000000000');
  });

  it('should show the number of residents', () => {
    expect(ResidentialSut.residentsQuantity).toBe(10);
  });

  it('should show the number of residents', () => {
    expect(ResidentialSut.getCep()).toBe('99999999');
  });

  it('should show the number of calculate bil', () => {
    expect(ResidentialSut.calculateBill()).toBe(675);
  });
});
