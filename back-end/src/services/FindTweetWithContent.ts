import { getRepository } from 'typeorm';
import { Tweets } from '../database/models/Tweets'
import { Contents } from '../database/models/Contents'
import { Users } from '../database/models/Users'

interface IRequest {
  tweet_Id: string;
}
interface IResponse {
  content: IContentResponse;
}
interface IContentResponse {
  id: string,
  description: string | null;
  image: string | null;
  video: string | null;
  created_At: Date;
  tweet_id: ITweet;
}
interface ITweet {
  id: string;
  created_At: Date;
  user_id: IUser
}
interface IUser {
  id: string,
  screen_name: string,
  username: string,
  avatar: string,
  verified: boolean,
}


class FindTweetContent {
  public async execute({ tweet_Id }: IRequest): Promise<IResponse> {
    const contentRepo = getRepository(Contents);
    const content = await contentRepo.findOne({ where: { tweet_id: tweet_Id } }) as Contents;

    const tweet = content.tweet_id;
    const user = tweet.user_id;

    const { description, image, video } = content;
    const { screen_name, username, avatar, verified } = user;


    const response = <IResponse>{
      content: {
        id: content.id,
        description,
        image,
        video,
        created_At: content.created_At,
        tweet_id: {
          id: tweet.id,
          created_At: tweet.created_At,
          user_id: {
            id: user.id,
            screen_name,
            username,
            avatar,
            verified,
          }
        },
      }
    }

    return response;
  }

  public async findAll(): Promise<IResponse[]> {
    const contentRepo = getRepository(Contents);

    var allContents: IResponse[] = [];

    const contents = await contentRepo.find({ order: { created_At: 'DESC' } });
    await new Promise(async (resolve) => {
      for (let index = 0; index < contents.length; index++) {
        try {
          const content = contents[index];
          const tweet = content.tweet_id;
          const user = tweet.user_id;

          const { description, image, video } = content;
          const { screen_name, username, avatar, verified } = user;

          const response = <IResponse>{
            content: {
              id: content.id,
              description,
              image,
              video,
              created_At: content.created_At,
              tweet_id: {
                id: tweet.id,
                created_At: tweet.created_At,
                user_id: {
                  id: user.id,
                  screen_name,
                  username,
                  avatar,
                  verified,
                }
              },
            }
          }

          allContents.push(response);
        } catch (err) {
          console.log(err);
        } finally {
          const count = index + 1;
          if (count == contents.length) {
            resolve();
          }
        }
      }
    });
    return allContents;
  }
}

export default FindTweetContent