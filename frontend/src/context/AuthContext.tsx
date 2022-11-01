import React, { createContext, useContext, useState } from 'react';

import { OpenAPI, AuthenticationService, UserRead } from '../api';
import { toast } from 'react-toastify';
import { UseMutationResult, useQuery } from 'react-query';
import Cookies from 'js-cookie';
import { useMutation } from 'react-query';

export type authType = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  login: UseMutationResult<
    UserRead,
    unknown,
    {
      email: string;
      password: string;
    },
    unknown
  >;
  register: UseMutationResult<
    UserRead,
    unknown,
    {
      name: string;
      email: string;
      password: string;
      phone: string;
    },
    unknown
  >;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = ProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const ProvideAuth = () => {
  const [role, setRole] = useState('public');

  const { refetch } = useQuery(
    'authentication',
    () =>
      AuthenticationService.getRole({
        access_token: Cookies.get('token') || '',
      }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        toast.success(data.message);
        setRole(data.message);
        if (data.message === 'user' || data.message === 'admin') {
          OpenAPI.TOKEN = Cookies.get('token') || '';
        }
      },
    }
  );

  const login = useMutation(
    (variables: { email: string; password: string }) =>
      AuthenticationService.signIn({
        username: variables.email,
        password: variables.password,
      }),
    {
      onSuccess: (data) => {
        Cookies.set('token', data.access_token);
        refetch();
      },
    }
  );

  const register = useMutation(
    (variables: {
      name: string;
      email: string;
      password: string;
      phone: string;
    }) =>
      AuthenticationService.signUp({
        name: variables.name,
        email: variables.email,
        password: variables.password,
        phone_number: variables.phone,
      }),
    {
      onSuccess: (data) => {
        Cookies.set('token', data.access_token);
        refetch();
      },
    }
  );

  return {
    role,
    setRole,
    login,
    refetch,
    register,
  };
};
const AuthContext = createContext<authType>(ProvideAuth());
