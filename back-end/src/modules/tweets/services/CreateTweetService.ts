import { getRepository } from 'typeorm';
import Users from '@modules/users/infra/typeorm/models/Users';
import Tweets from '../infra/typeorm/models/Tweets';
import CreateContent from './CreateContentService';

interface IUser {
  id: string;
  screen_name: string;
  username: string;
  avatar: string;
  verified: boolean;
}
interface ITweet {
  id: string;
  created_At: Date;
  user_id: IUser;
}
interface IContent {
  description?: string | null;
  image?: string | null;
  video?: string | null;
}
interface IRequest {
  userId: string;
  tweetContent: IContent;
}
interface IResponse {
  tweet: ITweet;
  content: IContent;
}

class CreateTweet {
  public async execute({ userId, tweetContent }: IRequest): Promise<IResponse> {
    const { description, image, video } = tweetContent;
    const repoTweets = getRepository(Tweets);
    const repoUsers = getRepository(Users);

    const user = (await repoUsers.findOne({ where: { id: userId } })) as Users;
    const tweet = await repoTweets.create({ user_id: user });
    await repoTweets.save(tweet);

    const createContent = new CreateContent();
    const content = await createContent.execute({
      tweet_id: tweet,
      description,
      image,
      video,
    });

    const { screen_name, username, avatar, verified } = user;

    const response: IResponse = {
      tweet: {
        id: tweet.id,
        created_At: tweet.created_At,
        user_id: {
          id: user.id,
          screen_name,
          username,
          avatar,
          verified,
        },
      },
      content: {
        description: content.description,
        image: content.image,
        video: content.video,
      },
    };

    return response;
  }
}

export default CreateTweet;
