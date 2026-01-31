export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}
