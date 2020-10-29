import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { users } from '../Database/data';


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

    const user = {
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