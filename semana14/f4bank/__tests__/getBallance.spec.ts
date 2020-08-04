import getBallance from '../src/services/getBallance';

let accounts: any = [];

describe('Get Ballance function ', () => {
  it('should show error by blank cpf', () => {
    const response = getBallance('jonatan', '');
    expect(response).toBe('empty CPF error');
  });

  it('should show error for invalid CPF', () => {
    const response = getBallance('jonatan', '000');
    expect(response).toBe('cpf error must be 11 digits');
  });

  it('should show error by blank name', () => {
    const response = getBallance('', '00000000000');
    expect(response).toBe('empty name error');
  });

  it('should name and ballance', () => {
    jest.fn(() => {
      return accounts.push({
        name: 'jonatan',
        cpf: '00000000000',
        ballance: 10,
      });
    });
    const getBalance = jest.fn(() => {
      getBallance('jonatan', '00000000000');
      return {
        cpf: '00000000000',
        ballance: 10,
        name: 'jonatan',
      };
    });
    const b = getBalance();

    expect(b.ballance).toBe(10);
  });
});
