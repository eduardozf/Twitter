import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';
import CreateSessionService from './CreateSessionService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProver: FakeHashProvider;
let createSessionService: CreateSessionService;
let createUserService: CreateUserService;

describe('Create Session', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProver = new FakeHashProvider();
    createSessionService = new CreateSessionService(
      fakeUsersRepository,
      fakeHashProver,
    );
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProver,
    );
  });

  it('should be able to create session', async () => {
    await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    const token = await createSessionService.execute({
      email: 'fulano@gmail.com',
      password: '123456',
    });

    expect(token).toHaveProperty('token');
  });

  it('should not be able to create session with wrong email', async () => {
    await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    await expect(
      createSessionService.execute({
        email: 'fulano2@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create session with wrong password', async () => {
    await createUserService.execute({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    await expect(
      createSessionService.execute({
        email: 'fulano@gmail.com',
        password: 'wrongPassword',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
