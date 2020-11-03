import { getRepository } from 'typeorm';
import { Tweets } from '../database/models/Tweets';
import { Contents } from '../database/models/Contents';

interface IRequest {
  tweet_id: Tweets;
  description?: string | null;
  image?: string | null;
  video?: string | null;
}

class CreateContent {
  public async execute({ tweet_id, description, image, video }: IRequest): Promise<Contents> {
    const repoContents = getRepository(Contents);

    try {
      if ((description as string).length <= 0) description = null;
    } catch (err) { }
    try {
      if ((image as string).length <= 6) image = null;
    } catch (err) { }
    try {
      if ((video as string).length <= 6) video = null;
    } catch (err) { }


    //Check if has any content
    if (description == null && image == null && video == null) {
      throw new Error('Tweet has no content!');
    }

    const data = {
      tweet_id,
      description: description as string,
      image: image as string,
      video: video as string
    }

    const content = await repoContents.create(data);
    await repoContents.save(content);

    return content;
  }
}

export default CreateContent;