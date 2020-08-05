import { User } from './User';

export class Employee extends User {
  private addmissionDate: string;
  private baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    baseSalary: number,
    addmissionDate: string,
  ) {
    super(id, email, name, password);
    console.log('Chamando o construtor da classe Customer');
    this.baseSalary = baseSalary;
    this.addmissionDate = addmissionDate;
  }

  public getCreditCard(): number {
    return this.baseSalary;
  }
}
