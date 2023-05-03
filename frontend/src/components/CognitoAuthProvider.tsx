import React, { useState, useEffect } from "react";
import { SignUpParams } from "@aws-amplify/auth/lib-esm/types";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Amplify, Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

import { CognitoAuthContext } from "../types/CognitoContext";
import AuthConfig from "../config/auth";
import { CognitoAttributes } from "../types/CognitoAttributes";

type Props = typeof AuthConfig & { children: any };

const CognitoAuthProvider = (props: Props) => {
  Amplify.configure(AuthConfig);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<CognitoUser>();

  useEffect(() => {
    checkAuthenticated();
    currentAuthenticatedUser();
  }, []);

  const checkAuthenticated = () => {
    setIsLoading(true);
    Auth.currentSession()
      .then((data) => {
        if (data) setIsAuthenticated(true);
      })
      .catch((err) => console.log("current session error", err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const currentAuthenticatedUser = async (): Promise<void> => {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    console.log('currentAuthenticatedUser', user, typeof user);
    setUser(user);
  };

  const signIn = async () => {
    await Auth.federatedSignIn(
      {
        provider: CognitoHostedUIIdentityProvider.Cognito
      }
    );
    // currentAuthenticatedUser();
  };

  const signUp = signIn;

  const signOut = () => {
    setIsLoading(true);
    Auth.signOut()
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getAttributes = async () => {
    const attrs = await new Promise((resolve) =>
      user?.getUserAttributes((_, attributes) => {
        const {
          email,
          email_verified,
          sub,
          name,
          picture,
          identities,
         } = Object.fromEntries(
          attributes!.map(({ Name, Value }) => [Name, Value])
        );
        resolve({
          email,
          emailVerified: Boolean(email_verified),
          sub,
          name,
          picture,
          identities,
        });
      })
    );
    return attrs as CognitoAttributes;
  }

  return (
    <CognitoAuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        signUp,
        signOut,
        setUser,
        getAttributes,
        user,
        error
      }}
    >
      {props.children}
    </CognitoAuthContext.Provider>
  );
}

export default CognitoAuthProvider;
