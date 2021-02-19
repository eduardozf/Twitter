import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';
import Tweet from '../infra/typeorm/entities/Tweet';

export default interface ITweetsRepository {
  findAll(): Promise<Tweet[] | undefined>;
  findById(id: string): Promise<Tweet | undefined>;
  create(data: ICreateTweetDTO): Promise<Tweet>;
  deleteById(id: string): Promise<void>;
}
