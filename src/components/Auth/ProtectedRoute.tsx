import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Get user ID from localStorage
  const userId = localStorage.getItem('userId');
  
  // If no userId in localStorage, redirect to landing
  if (!userId) {
    return <Navigate to="/" replace />;
  }

  // Verify user exists in DB
  const user = useQuery(api.users.getUser, { 
    public_uuid: parseInt(userId) 
  });

  // Show loading while checking
  if (user === undefined) {
    return <div>Loading...</div>;
  }

  // If no user found in DB, clear localStorage and redirect
  if (!user) {
    localStorage.removeItem('userId');
    return <Navigate to="/" replace />;
  }

  // User is authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;