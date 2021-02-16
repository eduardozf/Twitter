import { Router } from 'express';
import { getRepository } from 'typeorm';
import Users from '@modules/users/infra/typeorm/models/Users';
import CreateUser from '@modules/users/services/CreateUserService';
import FollowService from '@modules/tweets/services/FollowService';

const UsersRoute = Router();

UsersRoute.get('/', async (req, res) => {
  try {
    const repo = getRepository(Users);

    res.json(await repo.find());
  } catch (err) {
    console.log('⛔', err.message);
    res.status(400).json();
  }
});

UsersRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const repo = getRepository(Users);

    const getUser = (await repo.findOne({
      where: {
        id,
      },
    })) as Users;

    res.json({
      id: getUser.id,
      screen_name: getUser.screen_name,
      username: getUser.username,
      email: getUser.email,
    });
  } catch (err) {
    console.log('⛔', err.message);
    res.status(400).json();
  }
});

UsersRoute.post('/new', async (req, res) => {
  try {
    const { screen_name, username, email, password } = req.body;

    const createUser = new CreateUser();
    const user = await createUser.execute({
      screen_name,
      username,
      email,
      password,
    });

    user.password = '';
    res.json(user);
  } catch (err) {
    console.log('⛔', err.message);
    res.status(400).json(err.message);
  }
});

UsersRoute.get('/followers/:id', async (req, res) => {
  const { id } = req.params;
  const followService = new FollowService();

  res.json(await followService.followers({ id }));
});

UsersRoute.get('/follow', async (req, res) => {
  res.json();
});
UsersRoute.delete('/follow', async (req, res) => {
  res.json();
});

export default UsersRoute;
