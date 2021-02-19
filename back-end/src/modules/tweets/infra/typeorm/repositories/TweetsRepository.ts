import { Repository, getRepository } from 'typeorm';
import ITweetsRepository from '@modules/tweets/repositories/ITweetsRepository';
import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';

import Tweet from '../entities/Tweet';

export default class TweetsRepository implements ITweetsRepository {
  private ormRepository: Repository<Tweet>;

  constructor() {
    this.ormRepository = getRepository(Tweet);
  }

  public async findAll(): Promise<Tweet[] | undefined> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Tweet | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async create(data: ICreateTweetDTO): Promise<Tweet> {
    const tweet = await this.ormRepository.create(data);
    await this.ormRepository.save(tweet);
    return tweet;
  }

  public async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
