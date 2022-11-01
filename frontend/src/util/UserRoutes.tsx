import { Outlet, Navigate } from 'react-router-dom';
import { authType, useAuth } from '../context/AuthContext';
const UserRoutes = () => {
  const { role }: authType = useAuth();
  return role === 'user' || role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export default UserRoutes;
