import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ROUTES } from './routesConfig';

export const ProtectedRoute = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  // If no token, redirect to login
  if (!token) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  // If token exists, render child routes
  return <Outlet />;
};
