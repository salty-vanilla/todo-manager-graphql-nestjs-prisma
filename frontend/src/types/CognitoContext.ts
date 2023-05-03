import React, { Dispatch, SetStateAction, useContext } from "react";
import { SignUpParams } from "@aws-amplify/auth/lib-esm/types";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AuthState, initialContext } from "./CognitoState";
import { CognitoAttributes } from "../types/CognitoAttributes";

interface IAuthContext extends AuthState {
  signIn: () => void;
  signUp: () => void;
  // confirmSignUp: (params: any) => Promise<void>;
  signOut: () => void;
  setUser: Dispatch<SetStateAction<CognitoUser | undefined>>;
  getAttributes: () => Promise<CognitoAttributes>;
}
export const CognitoAuthContext = React.createContext<IAuthContext>(initialContext);
export const useAuth = () => useContext(CognitoAuthContext);
