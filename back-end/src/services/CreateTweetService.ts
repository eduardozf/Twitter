import { getRepository } from 'typeorm';
import { Tweets } from '../database/models/Tweets';
import { Users } from '../database/models/Users';
import CreateContent from '../services/CreateContentService';

interface IRequest {
  userId: string;
  tweetContent: IContent;
}
interface IResponse {
  tweet: ITweet;
  content: IContent;
}
interface ITweet {
  id: string;
  created_At: Date;
  user_id: IUser;
}
interface IUser {
  id: string,
  screen_name: string,
  username: string,
  avatar: string,
  verified: boolean,
}
interface IContent {
  description?: string | null;
  image?: string | null;
  video?: string | null;
}

class CreateTweet {
  public async execute({ userId, tweetContent }: IRequest): Promise<IResponse> {
    const { description, image, video } = tweetContent;
    const repoTweets = getRepository(Tweets);
    const repoUsers = getRepository(Users);

    const user = await repoUsers.findOne({ where: { id: userId } }) as Users;
    const tweet = await repoTweets.create({ user_id: user });
    await repoTweets.save(tweet);

    const createContent = new CreateContent();
    const content = await createContent.execute({ tweet_id: tweet, description, image, video })

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
        }
      },
      content: {
        description: content.description,
        image: content.image,
        video: content.video,
      },
    }

    return response;
  }
}

export default CreateTweet;