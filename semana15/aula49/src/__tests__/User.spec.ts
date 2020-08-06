import { User } from '../Class/User';
describe('Class User', () => {
  const user = new User('1', 'email@mail.com', 'jonatan', 'colorado');
  it('should show the user class data', () => {
    expect(user).toEqual({
      id: '1',
      email: 'email@mail.com',
      name: 'jonatan',
      password: 'colorado',
    });
  });

  it('should show the name user class', () => {
    const response = user.getName();
    expect(response).toBe('jonatan');
  });

  it('should show the id user class', () => {
    const response = user.getId();
    expect(response).toBe('1');
  });

  it('should show the email user class', () => {
    const response = user.getEmail();
    expect(response).toBe('email@mail.com');
  });

  it('should show welcome message', () => {
    const response = user.introduceYourself();
    expect(response).toBe('olá jonatan, Bom dia!');
  });
});
