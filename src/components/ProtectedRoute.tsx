import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true 
}) => {
  const { user } = useAuth();

  if (requireAuth && !user) {
    return <Navigate to="/signin" replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to="/rentals" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
