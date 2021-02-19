import { Request, Response } from 'express';
import CreateSessionService from '@modules/users/services/CreateSessionService';
import { container } from 'tsyringe';

export default class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSessionService = container.resolve(CreateSessionService);

    const response = await createSessionService.execute({ email, password });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line Ignore delete ts error
    delete response.user.password;

    return res.json(response);
  }
}
