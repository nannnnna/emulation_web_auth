import express from 'express';
import { container } from './inversify.config';
import { AuthService } from './services/AuthService';
import { UserService } from './services/UserService';

const app = express();
app.use(express.json());

const authService = container.get<AuthService>(AuthService);
const userService = container.get<UserService>(UserService);

app.post('/v1/tg-login', (req, res) => {
    const { tg_init_data } = req.body;
    const token = authService.login(tg_init_data);
    res.json({ access_token: token });
});

app.get('/v1/me', (req, res) => {
    const user = userService.getUser(req.body.tg_init_data);
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
