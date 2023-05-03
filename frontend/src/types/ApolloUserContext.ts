import React, { useContext } from "react";
import { AuthState, initialContext } from "./ApolloUserState";

interface IAuthContext extends AuthState {
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}
export const ApolloUserContext = React.createContext<IAuthContext>(initialContext);
export const useApolloUser = () => useContext(ApolloUserContext);
