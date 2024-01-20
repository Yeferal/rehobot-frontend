'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { getIsLogging } from '@/services/auth/AuthService';
import { setIsAuthenticated, setRole, setToken } from '@/store/reducers/authReducer';

export default function ProtectedRoute ({ children }: {children: React.ReactNode}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    
    const fetchData = async () => {
      // get the data from the api
      const data = await getIsLogging();

      if (pathname.startsWith("/dashboard") && !data) {
        dispatch(setToken(undefined));
        dispatch(setRole(undefined));
        dispatch(setIsAuthenticated(false));
        router.push('/login');
        return null;
      }
    
      if (pathname.startsWith("/login") && data) {
        router.push('/dashboard');
        return null;
      }
    }

    fetchData();
    
  })


  return <>{children}</>;
};
