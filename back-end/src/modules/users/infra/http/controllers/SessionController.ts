import { Request, Response } from 'express';
import CreateSessionService from '@modules/users/services/CreateSessionService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import HashProvider from '@modules/users/providers/HashProvider/implementations/bcrypt';

export default class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const usersRepository = new UsersRepository();
    const hashProvider = new HashProvider();
    const createSessionService = new CreateSessionService(
      usersRepository,
      hashProvider,
    );

    const response = await createSessionService.execute({ email, password });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line Ignore delete ts error
    delete response.user.password;

    return res.json(response);
  }
}
