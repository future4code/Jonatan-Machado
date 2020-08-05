import { User } from './User';

export class Employee extends User {
  protected _addmissionDate: moment.Moment;
  protected _baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    baseSalary: number,
    addmissionDate: moment.Moment,
  ) {
    super(id, email, name, password);
    console.log('Chamando o construtor da classe Customer');
    this._baseSalary = baseSalary;
    this._addmissionDate = addmissionDate;
  }

  get addmissionDate(): moment.Moment {
    return this._addmissionDate;
  }

  set addmissionDate(date: moment.Moment) {
    console.log(date);
    if (date.isValid()) {
      this._addmissionDate = date;
    }
  }

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(salary: number) {
    if (salary >= 0) {
      this._baseSalary = salary;
    }
  }
}
