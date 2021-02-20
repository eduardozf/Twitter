import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/bcrypt';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
