import { Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import HashProvider from '@modules/users/providers/HashProvider/implementations/bcrypt';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { username, screenName, email, password } = req.body;

    const usersRepository = new UsersRepository();
    const hashProvider = new HashProvider();
    const createUser = new CreateUserService(usersRepository, hashProvider);
    const user = await createUser.execute({
      username,
      screenName,
      email,
      password,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line Ignore next line error
    delete user.password;

    return res.json(user);
  }
}
