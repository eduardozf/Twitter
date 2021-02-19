import { Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { username, screenName, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

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
