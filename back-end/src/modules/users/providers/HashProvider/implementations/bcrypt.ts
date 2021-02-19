import { hash, compare } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

export default class bcrypt implements IHashProvider {
  generate(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
