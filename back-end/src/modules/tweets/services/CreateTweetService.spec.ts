import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakesUsersRepository';
import CreateTweetService from './CreateTweetService';
import FakeTweetsRepository from '../repositories/fakes/FakeTweetsRepository';

describe('Create Tweet', () => {
  it('should be able to create tweet', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeTweetsRepository = new FakeTweetsRepository();
    const createTweetService = new CreateTweetService(fakeTweetsRepository);

    const user = await fakeUsersRepository.create({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    const tweet = await createTweetService.execute({
      owner_id: user.id,
      description: 'Lorem ipsum',
      images: undefined,
      video: undefined,
    });
    expect(tweet).toHaveProperty('id');
  });

  it('should not be able to create tweet without content', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeTweetsRepository = new FakeTweetsRepository();
    const createTweetService = new CreateTweetService(fakeTweetsRepository);

    const user = await fakeUsersRepository.create({
      username: 'fulano',
      screenName: 'Fulano',
      email: 'fulano@gmail.com',
      password: '123456',
    });

    await expect(
      createTweetService.execute({
        owner_id: user.id,
        description: undefined,
        images: undefined,
        video: undefined,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
