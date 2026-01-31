import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { ROUTES } from './routesConfig';

// Placeholder components - replace with actual Feature Pages later
const LoginPage = () => <div>Login Page</div>;
const DashboardPage = () => <div>Dashboard Page</div>;
const HomePage = () => <div>Home Page</div>;

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  },
  {
    element: <ProtectedRoute />, // Wrap protected routes
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />
      }
    ]
  }
]);
