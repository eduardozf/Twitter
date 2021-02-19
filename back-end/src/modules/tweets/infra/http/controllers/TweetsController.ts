import { Router } from 'express';
import CreateTweetService from '@modules/tweets/services/CreateTweetService';
import TweetsRepository from '@modules/tweets/infra/typeorm/repositories/TweetsRepository';

const TweetsRoute = Router();

TweetsRoute.post('/', async (req, res) => {
  const { description, images, video } = req.body;
  const { user } = req;

  const tweetsRepository = new TweetsRepository();
  const createTweet = new CreateTweetService(tweetsRepository);

  const tweet = await createTweet.execute({
    owner_id: user.id,
    description,
    images,
    video,
  });

  res.json(tweet);
});

/* TweetsRoute.get('/', async (_, res) => {
  const tweetService = new TweetService();
  const allTweets = await tweetService.findAll();

  res.json(allTweets);
});

TweetsRoute.get('/:id', async (req, res) => {
  const { id } = req.params;

  const tweetService = new TweetService();
  const tweet = await tweetService.findOne({ tweet_Id: id });
  res.json(tweet);
}); */

/*
TweetsRoute.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const tweetService = new TweetService();
  await tweetService.delete({ tweet_Id: id });
  res.status(204).json();
}); */

export default TweetsRoute;
