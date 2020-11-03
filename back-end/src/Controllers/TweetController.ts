import { Router } from 'express';
import CreateTweet from '../services/CreateTweetService';
import FindTweet from '../services/FindTweetWithContent';

const TweetsRoute = Router();

TweetsRoute.get('/', async (req, res) => {
  const findTweet = new FindTweet();
  const allTweets = await findTweet.findAll();

  res.json(allTweets);
})

TweetsRoute.get('/:id', async (req, res) => {
  const { id } = req.params;

  const findTweet = new FindTweet();
  const tweet = await findTweet.execute({ tweet_Id: id })
  res.json(tweet);
})

TweetsRoute.post('/new', async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.userId;

    const createTweet = new CreateTweet();
    const tweet = await createTweet.execute({ userId, tweetContent: content });

    res.json(tweet);
  } catch (err) {
    console.log('⛔', err.message);
    res.status(400).json(err.message);
  }
})

export default TweetsRoute;