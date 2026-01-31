import { ApiResponse } from '@punya-utkal/shared';
import { Response } from 'express';

export const sendResponse = <T>(res: Response, status: number, payload: ApiResponse<T>) => {
    res.status(status).json(payload);
};
