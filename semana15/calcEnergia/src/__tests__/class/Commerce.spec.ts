import { Commerce } from '../../class/Commerce';

const ComerceSut = new Commerce(2, '00000000');

describe('class Residence', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show the zip code number', () => {
    expect(ComerceSut.getCep()).toBe('00000000');
  });

  it('should show the number of floor', () => {
    expect(ComerceSut.floorsQuantity).toBe(2);
  });
});
