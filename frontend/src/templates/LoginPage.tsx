import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../types/CognitoContext';

const LoginPage = () => {
  const { signIn } = useAuth();
  return (
    <Button onClick={() => signIn()}>
      Login
    </Button>
  );
}

export default LoginPage;
