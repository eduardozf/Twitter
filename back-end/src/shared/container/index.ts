import 'reflect-metadata';
import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ITweetsRepository from '@modules/tweets/repositories/ITweetsRepository';
import TweetsRepository from '@modules/tweets/infra/typeorm/repositories/TweetsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITweetsRepository>(
  'TweetssRepository',
  TweetsRepository,
);
