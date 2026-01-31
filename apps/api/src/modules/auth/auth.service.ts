import { AuthRepository } from './auth.repository';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.config';

export class AuthService {
    static async login(data: any) {
        // Validate user via repository
        // Stub implementation
        const user = { id: '1', email: data.email, role: 'user' };
        const token = jwt.sign(user, env.JWT_SECRET, { expiresIn: '1d' });
        return { user, token };
    }

    static async register(data: any) {
        // Create user via repository
        return { id: '1', email: data.email };
    }
}
