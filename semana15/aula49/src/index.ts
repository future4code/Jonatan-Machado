import { User } from './Class/User';
import { Customer } from './Class/Customer';

const user = new User('1', 'email@mail.com', 'jonatan machado', 'colorado');

const customer = new Customer(
  '1',
  'email@mail.com',
  'jonatan@',
  'colorado',
  '90909090',
);

customer.introduceYourself();
