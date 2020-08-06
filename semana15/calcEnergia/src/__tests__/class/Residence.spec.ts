import { Residence } from '../../class/Residence';

const ResidenceSut = new Residence(9, '00000000');

describe('class Residence', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the zip code number', () => {
    expect(ResidenceSut.getCep()).toBe('00000000');
  });

  it('should show the number of residents', () => {
    expect(ResidenceSut.residentsQuantity).toBe(9);
  });
});
