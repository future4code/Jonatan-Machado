import { Employee } from '../Class/Employee';
import moment from 'moment';
describe('class Employee', () => {
  const day = moment('02/12/1992', 'DD/MM/YYYY');
  const employee = new Employee(
    '1',
    'email@mail.com',
    'jonatan',
    'colorado',
    900,
    day,
  );
  it('should show the registered user id', () => {
    expect(employee.getId()).toEqual('1');
  });

  it('should show the email of the registered user', () => {
    expect(employee.getEmail()).toEqual('email@mail.com');
  });

  it('should show the name of the registered user', () => {
    expect(employee.getName()).toEqual('jonatan');
  });

  it('should show the registered user`s base salary', () => {
    expect(employee.baseSalary).toEqual(900);
  });

  it('should show the user`s admission date', () => {
    expect(employee.addmissionDate).toEqual(moment('02/12/1992', 'DD/MM/YYYY'));
  });

  it('should show change the salary base ', () => {
    const alterBaseSalary = (employee.baseSalary = 90);
    expect(employee.baseSalary).toEqual(90);
  });

  it('should show change the admission date ', () => {
    const response = (employee.addmissionDate = moment(
      '02/12/1995',
      'DD/MM/YYYY',
    ));
    expect(employee.addmissionDate).toEqual(moment('02/12/1995', 'DD/MM/YYYY'));
  });

  it('should not change the salary base ', () => {
    const alterBaseSalary = (employee.baseSalary = -90);
    expect(employee.baseSalary).toEqual(900);
  });

  it('should not change the admission date ', () => {
    const response = (employee.addmissionDate = moment('', 'DD/MM/YYYY'));
    expect(employee.addmissionDate).toEqual(moment('02/12/1992', 'DD/MM/YYYY'));
  });
});

moment().isValid();
