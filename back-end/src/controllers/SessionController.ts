import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Users } from '../database/models/Users';
import { compare } from 'bcryptjs';
import 'dotenv';
import jwt from 'jsonwebtoken';

const SessionRoute = Router();

SessionRoute.get('/', async (req, res) => {
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

  res.json({
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET as string, {
      expiresIn: '1d'
    })
  })
})


export default SessionRoute;