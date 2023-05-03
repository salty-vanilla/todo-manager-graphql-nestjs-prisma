import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../types/CognitoContext";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth, Hub } from "aws-amplify";
import { createUserMutation } from "../graphql/mutation/createUser";
import { useCookies } from "react-cookie";
import { getUserQuery } from "../graphql/query/getUser";
import { useApolloUser } from "../types/ApolloUserContext";

const CallbackPage = () => {
  const { user } = useAuth();
  const [ _, setCookie ] = useCookies();
  const { signIn } = useApolloUser();


  useEffect(() => {
    const jwt = user?.getSignInUserSession()?.getIdToken().getJwtToken();
    setCookie('jwt', jwt!);
    signIn();
  }, [])

  useEffect(() => {
    const jwt = user?.getSignInUserSession()?.getIdToken().getJwtToken();
    setCookie('jwt', jwt!);
    signIn();
  }, [user])

  return (
  <div>
    <div>
      Loading......!!!!
    </div>
    {/* <div>
      {user?.authenticateUser.name}
    </div> */}
  </div>
  )
}

export default CallbackPage;
