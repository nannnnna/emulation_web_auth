import { injectable } from 'inversify';

@injectable()
export class UserService {
    getUser(tgInitData: string): { tg_username: string, tg_id: number } {
        // Логика получения данных пользователя
        return { tg_username: 'my-tg-username', tg_id: 123456789 };
    }
}
