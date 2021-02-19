import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import AuthConfig from '@config/auth';
import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  token: string;
  user: User;
}

@injectable()
export default class CreateSessionService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    // Check if user exists
    if (!user) {
      throw new AppError('Wrong email or password', 401);
    }
    const passwordMatch = await this.hashProvider.compare(
      password,
      user.password,
    );
    // Check if password match
    if (!passwordMatch) {
      throw new AppError('Wrong email or password', 401);
    }

    const token = await sign({}, AuthConfig.jwt.secret, {
      subject: user.id,
      expiresIn: AuthConfig.jwt.expiresIn,
    });

    return { token, user };
  }
}
