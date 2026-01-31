import { createBrowserRouter } from 'react-router-dom';
// import { AuthLayout } from '@/features/auth/components/AuthLayout';
// import { LoginPage } from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>,
  },
  {
    path: '/auth',
    // element: <AuthLayout />,
    children: [
      {
        path: 'login',
        // element: <LoginPage />,
        element: <div>Login Page</div>
      }
    ]
  }
]);
