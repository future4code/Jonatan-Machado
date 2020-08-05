import { Seller } from '../Class/Seller';
import moment from 'moment';
describe('class Selles', () => {
  const seller = new Seller(
    '1',
    'mail@email.com',
    'jonatan',
    'colorado',
    900,
    moment('02/12/1992', 'DD/MM/YYYY'),
  );

  it('somar o quantidade vendida', () => {
    const response = seller.setSalesQuantity(10);
    expect(seller.getSalesQuantity()).toBe(10);
  });

  it('calcular o salario total', () => {
    const totalSalary = seller.calculateTotalSalary();
    expect(totalSalary).toBe(1350);
  });
});
