import 'reflect-metadata';
import { Container } from 'inversify';
import { AuthService } from './services/AuthService';
import { UserService } from './services/UserService';

const container = new Container();
container.bind<AuthService>(AuthService).to(AuthService);
container.bind<UserService>(UserService).to(UserService);

export { container };
