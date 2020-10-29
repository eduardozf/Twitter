import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { users, tweets } from '../Database/data';

export default module.exports = {
  all(req: Request, res: Response) {
    res.json(tweets);
  },

  get(req: Request, res: Response) {
    const { id } = req.params;

    const getTweet = tweets.find(item => item.id === id)
    res.json(getTweet);
  },

  async post(req: Request, res: Response) {
    const { owner, content } = req.body;
    const id = uuid();

    const getOwner = users.find(item => item.id === owner)
    const OwnerInfo = {
      id: getOwner?.id,
      name: getOwner?.name,
      username: getOwner?.username,
      avatar: getOwner?.avatar,
      verified: getOwner?.verified
    }

    const tweet = {
      id,
      owner: OwnerInfo,
      content,
      comments: [],
      retweets: [],
      liked_by: [],
    }
    tweets.push(tweet);
    res.json(tweet);
  }
}