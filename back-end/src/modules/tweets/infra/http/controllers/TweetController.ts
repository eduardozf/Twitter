import { Router } from 'express';
import TweetService from '@modules/tweets/services/TweetService';

const TweetsRoute = Router();

TweetsRoute.get('/', async (_, res) => {
  const tweetService = new TweetService();
  const allTweets = await tweetService.findAll();

  res.json(allTweets);
});

TweetsRoute.get('/:id', async (req, res) => {
  const { id } = req.params;

  const tweetService = new TweetService();
  const tweet = await tweetService.findOne({ tweet_Id: id });
  res.json(tweet);
});

TweetsRoute.post('/new', async (req, res) => {
  try {
    const { content } = req.body;
    const { userId } = req;

    const tweetService = new TweetService();
    const tweet = await tweetService.create({ userId, tweetContent: content });

    res.json(tweet);
  } catch (err) {
    console.log('⛔', err.message);
    res.status(400).json(err.message);
  }
});

TweetsRoute.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const tweetService = new TweetService();
  await tweetService.delete({ tweet_Id: id });
  res.status(204).json();
});

export default TweetsRoute;
