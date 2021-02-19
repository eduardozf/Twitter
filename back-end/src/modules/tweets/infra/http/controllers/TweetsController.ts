import { Router } from 'express';
import { container } from 'tsyringe';
import CreateTweetService from '@modules/tweets/services/CreateTweetService';

const TweetsRoute = Router();

TweetsRoute.post('/', async (req, res) => {
  const { description, images, video } = req.body;
  const { user } = req;

  const createTweet = container.resolve(CreateTweetService);

  const tweet = await createTweet.execute({
    owner_id: user.id,
    description,
    images,
    video,
  });

  res.json(tweet);
});

export default TweetsRoute;
