import { User } from './User';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User;
  error?: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    id: '',
    name: '',
  },
};
const stub = (): never => {
  throw new Error(
    "You forgot to wrap your component in <ApolloUserProvider>."
  );
};

export const initialContext = {
  ...initialState,
  signIn: stub,
  signUp: stub,
  signOut: stub,
};
