import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { sendResponse } from '../../shared/response.util';

export class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const result = await AuthService.login(req.body);
            sendResponse(res, 200, { success: true, data: result });
        } catch (error: any) {
            sendResponse(res, 401, { success: false, error: error.message });
        }
    }

    static async register(req: Request, res: Response) {
        try {
            const result = await AuthService.register(req.body);
            sendResponse(res, 201, { success: true, data: result });
        } catch (error: any) {
            sendResponse(res, 400, { success: false, error: error.message });
        }
    }
}
