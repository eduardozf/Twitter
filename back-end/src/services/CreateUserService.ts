import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs'
import { Users } from '../database/models/Users';
interface IRequest {
  screen_name: string,
  username: string,
  email: string,
  password: string,
}
class CreateUser {
  public async execute({ screen_name, username, email, password }: IRequest): Promise<Users> {
    const repo = getRepository(Users);

    //Check if username and email is already in use
    const usernameExists = await repo.findOne({ where: { username } })
    if (usernameExists) {
      throw new Error('Username is already in use.')
    }
    const emailExists = await repo.findOne({ where: { email } })
    if (emailExists) {
      throw new Error('E-mail is already in use.')
    }
    //Generate a hash of password
    const passwordHash = await hash(password, 10);

    const user = repo.create({
      screen_name,
      username,
      email,
      password: passwordHash,
      avatar: `https://api.hello-avatar.com/adorables/140/@${username}`
    });
    await repo.save(user)
    return user;
  }
}

export default CreateUser