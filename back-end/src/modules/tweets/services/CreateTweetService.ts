import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';

import AppError from '@shared/errors/AppError';
import ITweetsRepository from '../repositories/ITweetsRepository';
import Tweet from '../infra/typeorm/entities/Tweet';

class CreateTweetService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private tweetsRepository: ITweetsRepository) {}

  public async execute({
    owner_id,
    description,
    images,
    video,
  }: ICreateTweetDTO): Promise<Tweet> {
    // Verify content
    if (
      description === undefined &&
      images === undefined &&
      video === undefined
    ) {
      throw new AppError('Tweets has no content', 204);
    }

    const tweet = await this.tweetsRepository.create({
      owner_id,
      description,
      images,
      video,
    });
    return tweet;
  }
}

export default CreateTweetService;
