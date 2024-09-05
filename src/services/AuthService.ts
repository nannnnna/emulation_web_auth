import { injectable } from 'inversify';

@injectable()
export class AuthService {
    login(tgInitData: string): string {
        // Логика авторизации и генерации JWT токена
        return 'jwt-token';
    }
}
