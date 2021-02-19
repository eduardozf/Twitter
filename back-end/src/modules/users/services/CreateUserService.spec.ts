import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('Create User', () => {
  it('should be able to create a user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProver = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProver,
    );

    const user = await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with existing username', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProver = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProver,
    );

    await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        username: 'fulano',
        screenName: 'Fulano2',
        email: 'fulano2@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a user with existing email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProver = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProver,
    );

    await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    await expect(
      createUserService.execute({
        username: 'fulano2',
        screenName: 'Fulano2',
        email: 'fulano@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
