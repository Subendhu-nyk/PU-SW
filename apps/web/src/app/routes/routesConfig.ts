// Define route paths constants to avoid magic strings
export const ROUTES = {
    HOME: '/',
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
    },
    DASHBOARD: '/dashboard',
};

export const publicRoutes = [
    { path: ROUTES.HOME, title: 'Home' },
];
