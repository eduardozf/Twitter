import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

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

const users = <IUser[]>[
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
    "verified": false,
    "following": [
      {}
    ],
    "followers": [
      {}
    ]
  }]

export default module.exports = {
  all(req: Request, res: Response) {
    res.json(users);
  },

  get(req: Request, res: Response) {
    const { id } = req.params;
    const getUser = users.find(item => item.id === id)
    res.json(getUser);
  },

  post(req: Request, res: Response) {
    const { name, username, email, password } = req.body;
    const id = uuid();

    const user: IUser = {
      id,
      name,
      username,
      email,
      password,
      avatar: `https://api.hello-avatar.com/adorables/140/${username}`,
      verified: false,
      following: [{}],
      followers: [{}]

    }
    users.push(user);

    res.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      avatar: user.avatar
    });
  }
}