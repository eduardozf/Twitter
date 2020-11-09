import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Users } from '../database/models/Users';
import { compare } from 'bcryptjs';
import 'dotenv';
import jwt from 'jsonwebtoken';

interface IResponse {
  user: IUser;
  token: string;
}
interface IUser {
  id: string;
  screen_name: string;
  username: string;
  email: string;
  avatar: string;
  verified: boolean;
}

const SessionRoute = Router();

SessionRoute.post('/', async (req, res) => {
  const { email, password } = req.body;

  const repo = getRepository(Users);
  const user = await repo.findOne({ where: { email } }) as Users;
  if (!user) {
    res.status(404).json('Invalid e-mail or password.');
  }

  const passCheck = await compare(password, user.password);
  if (!passCheck) {
    res.status(404).json('Invalid e-mail or password.');
  }

  const { id, screen_name, username, avatar, verified } = user;

  const response: IResponse = {
    user: {
      id,
      screen_name,
      username,
      email,
      avatar,
      verified
    },
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET as string, {
      expiresIn: '1d'
    })
  }
  res.json(response)
})


export default SessionRoute;