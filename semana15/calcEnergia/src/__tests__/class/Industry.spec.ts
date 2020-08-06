import { Industry } from '../../class/Industry';

const IndustrySut = new Industry(3, '00000000');

describe('class Residence', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the zip code number', () => {
    expect(IndustrySut.getCep()).toBe('00000000');
  });

  it('should show the number of machines', () => {
    expect(IndustrySut.machinesQuantity).toBe(3);
  });
});
