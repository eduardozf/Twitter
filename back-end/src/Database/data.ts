//
// USER
//
interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  verified: boolean;
  following: object[];
  followers: object[];
}
interface IUserPublicData {
  id?: string;
  name?: string;
  username?: string;
  avatar?: string;
  verified?: boolean;
}

//
// TWEET
//
interface ITweet {
  id: string;
  owner: IUserPublicData;
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

//
// ==================END OF INTERFACES==================== //
//

export const users = <IUser[]>[
  {
    "id": "cb116b8c-285b-4fda-a743-f8a24fc0ce4e",
    "name": "Eduardo ZF",
    "username": "@Eduardo_ZF",
    "email": "eduardo@gmail.com",
    "avatar": "https://api.hello-avatar.com/adorables/140/@Eduardo_ZF",
    "verified": false,
    "following": [
      {}
    ],
    "followers": [
      {}
    ]
  },
  {
    "id": "40a6afb8-a20a-4f0d-81fd-636a590953de",
    "name": "Bugs Storm",
    "username": "@Bugs_Storm",
    "email": "BugsStorm@gmail.com",
    "avatar": "https://api.hello-avatar.com/adorables/140/@Bugs_Storm",
    "verified": false,
    "following": [
      {}
    ],
    "followers": [
      {}
    ]
  },
  {
    "id": "468e49b6-0fd2-489b-93de-41699c0e9f8a",
    "name": "The Chief",
    "username": "@Chief",
    "email": "Chief@gmail.com",
    "avatar": "https://api.hello-avatar.com/adorables/140/@Chief",
    "verified": true,
    "following": [
      {}
    ],
    "followers": [
      {}
    ]
  }]
export const tweets = <ITweet[]>[
  {
    "id": "d03dca9f-766c-443b-b77a-b30b25bd92f9",
    "owner": {
      "id": "40a6afb8-a20a-4f0d-81fd-636a590953de",
      "name": "Bugs Storm",
      "username": "@Bugs_Storm",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Bugs_Storm",
      "verified": false
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "27bfe221-f828-4e32-af14-ecf1777cb55f",
    "owner": {
      "id": "40a6afb8-a20a-4f0d-81fd-636a590953de",
      "name": "Bugs Storm",
      "username": "@Bugs_Storm",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Bugs_Storm",
      "verified": false
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "1153e43f-f088-43f5-bac8-b5d01ef9f0c1",
    "owner": {
      "id": "40a6afb8-a20a-4f0d-81fd-636a590953de",
      "name": "Bugs Storm",
      "username": "@Bugs_Storm",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Bugs_Storm",
      "verified": false
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "8e967110-1243-4c1f-9ca9-feb7aa8c5725",
    "owner": {
      "id": "468e49b6-0fd2-489b-93de-41699c0e9f8a",
      "name": "The Chief",
      "username": "@Chief",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Chief",
      "verified": true
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "b40818f1-6eb9-450b-b4d9-0baa1ff5401f",
    "owner": {
      "id": "468e49b6-0fd2-489b-93de-41699c0e9f8a",
      "name": "The Chief",
      "username": "@Chief",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Chief",
      "verified": true
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  },
  {
    "id": "3fe90ea6-a78c-4c7c-8f80-3a43fe68541b",
    "owner": {
      "id": "cb116b8c-285b-4fda-a743-f8a24fc0ce4e",
      "name": "Eduardo ZF",
      "username": "@Eduardo_ZF",
      "avatar": "https://api.hello-avatar.com/adorables/140/@Eduardo_ZF",
      "verified": false
    },
    "content": {
      "description": "amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit",
      "image": "",
      "video": ""
    },
    "comments": [],
    "retweets": [],
    "liked_by": []
  }
];