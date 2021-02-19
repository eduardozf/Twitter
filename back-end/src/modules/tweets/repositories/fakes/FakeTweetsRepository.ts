import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';
import Tweet from '@modules/tweets/infra/typeorm/entities/Tweet';
import { v4 as uuid } from 'uuid';
import ITweetsRepository from '../ITweetsRepository';

export default class FakeTweetsRepository implements ITweetsRepository {
  private tweets: Tweet[] = [];

  public async findAll(): Promise<Tweet[]> {
    return this.tweets;
  }

  public async findById(id: string): Promise<Tweet | undefined> {
    return this.tweets.find(tweet => tweet.id === id);
  }

  public async create({
    description,
    images,
    video,
  }: ICreateTweetDTO): Promise<Tweet> {
    const tweet = new Tweet();
    Object.assign(tweet, {
      id: uuid(),
      description,
      images,
      video,
    });

    this.tweets.push(tweet);
    return tweet;
  }

  public async deleteById(id: string): Promise<void> {
    const tweetIndex = this.tweets.findIndex(tweet => tweet.id === id);
    this.tweets.splice(tweetIndex, 1);
  }
}
