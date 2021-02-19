import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import User from '../infra/typeorm/entities/User';

interface IRequest {
  screenName: string;
  username: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    screenName,
    username,
    email,
    password,
  }: IRequest): Promise<User> {
    // Check if username is already in use
    const usernameExists = await this.usersRepository.findByUsername(username);
    if (usernameExists) throw new AppError('Username is already in use');

    // Check if email is already in use
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) throw new AppError('E-mail is already in use');

    // Generate a hash of password
    const passwordHash = await this.hashProvider.generate(password);

    const user = await this.usersRepository.create({
      screenName,
      username,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
