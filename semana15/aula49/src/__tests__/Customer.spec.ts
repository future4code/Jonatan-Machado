import { Customer } from '../Class/Customer';

describe('class Customer', () => {
  const customer = new Customer(
    '1',
    'email@mail.com',
    'jonatan machado',
    'colorado',
    '90909090',
  );
  it('should show the customer data', () => {
    expect(customer).toEqual({
      id: '1',
      email: 'email@mail.com',
      name: 'jonatan machado',
      password: 'colorado',
      creditCard: '90909090',
      purchaseTotal: 0,
    });
  });
  it('should change the total purchaseTotal', () => {
    const response = (customer.purchaseTotal = 10);
    expect(response).toBe(10);
  });
  it('should show the creditcard data', () => {
    const response = customer.getCreditCard();
    expect(response).toBe('90909090');
  });
});
