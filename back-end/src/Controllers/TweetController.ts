import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

interface ITweet {
  id: string;
  owner: string;
  content: ITweetContent;
  comments: object[];
  retweets: object[];
  liked_by: object[];
}

interface ITweetContent {
  description: string;
  image: string;
  video: string;
}

const tweets = <ITweet[]>[
  {
    "id": "bc42804e-9507-4a38-b270-848155cac974",
    "owner": "cb116b8c-285b-4fda-a743-f8a24fc0ce4e",
    "content": {
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl augue, gravida at enim in, sagittis dignissim turpis. Sed eu aliquam dolor. Proin sed molestie sem. Quisque aliquet vulputate libero ut sollicitudin.",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "5c7112ff-cc67-433a-a5f3-f1683b880f1b",
    "owner": "40a6afb8-a20a-4f0d-81fd-636a590953de",
    "content": {
      "description": "Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "a8f9f92c-909a-40c7-8be0-95e4c5b2b1d4",
    "owner": "40a6afb8-a20a-4f0d-81fd-636a590953de",
    "content": {
      "description": "id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "cd6ad00f-984d-4382-a32e-41f13a0c55c7",
    "owner": "40a6afb8-a20a-4f0d-81fd-636a590953de",
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  }
]

export default module.exports = {
  all(req: Request, res: Response) {
    res.json(tweets);
  },

  get(req: Request, res: Response) {
    const { id } = req.params;

    const getTweet = tweets.find(item => item.id === id)
    res.json(getTweet);
  },

  post(req: Request, res: Response) {
    const { owner, content } = req.body;
    const id = uuid();

    const tweet: ITweet = {
      id,
      owner,
      content,
      comments: [],
      retweets: [],
      liked_by: [],
    }
    tweets.push(tweet);
    res.json(tweet);
  }
}