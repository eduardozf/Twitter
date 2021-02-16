import { getRepository } from 'typeorm';
import Tweets from '../infra/typeorm/models/Tweets';
import Contents from '../infra/typeorm/models/Contents';

interface IRequest {
  tweet_id: Tweets;
  description?: string | null;
  image?: string | null;
  video?: string | null;
}

class CreateContent {
  public async execute({
    tweet_id,
    description,
    image,
    video,
  }: IRequest): Promise<Contents> {
    const repoContents = getRepository(Contents);

    // Check if has any content
    if (description == null && image == null && video == null) {
      throw new Error('Tweet has no content!');
    }

    const data = {
      tweet_id,
      description: description as string,
      image: image as string,
      video: video as string,
    };

    const content = await repoContents.create(data);
    await repoContents.save(content);

    return content;
  }
}

export default CreateContent;
