import { useAuth } from "../types/CognitoContext";
import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getUserQuery } from "../graphql/query/getUser";
import { createUserMutation } from "../graphql/mutation/createUser";
import { User } from "../types/User";
import { useCookies } from "react-cookie";
import { UserCreateInput } from "../types/generated/graphql";
import { ApolloUserContext } from "../types/ApolloUserContext";

type Props = { children: any };

const ApolloUserProvider = (props: Props) => {
  const { getAttributes } = useAuth();
  const [ createUser, {} ] = useMutation(createUserMutation);
  const [ getUser, {} ] = useLazyQuery(getUserQuery);
  const [ user, setUser ] = useState<User>({
    id: '',
    name: '',
  });
  const [ _, setCookie ] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const signUp = () => {
    setIsLoading(true);
    getAttributes().then(
      (cognitoAttrs) => {
        const input = {
          id: cognitoAttrs.sub,
          name: cognitoAttrs.name,
        } as UserCreateInput;
        createUser({variables: {input: input}}).then((data) => {
          console.log(data);
          setUser({
            ...input as User,
            teams: data.data.user.teams
          });
          setIsAuthenticated(true);
          setIsLoading(false);
        });
      }
    )
  }

  const findSelf = async (): Promise<{isExist: boolean, userInfo: User | null}> => {
    const cognitoAttrs = await getAttributes();
    return getUser({ variables: { id: cognitoAttrs.sub } }).then(
      (data) => {
        const { id, name } = data.data.user;
        if (id && name){
          return { isExist: true, userInfo: data.data.user as User };
        }
        else{
          return { isExist: false, userInfo: null};
        }
      }
    ).catch((e) => {
      console.error(e);
      setError(e);
      return { isExist: false, userInfo: null};
    });
  };

  const signIn = () => {
    console.log('signIn');
    setIsLoading(true);
    findSelf().then(
      ({isExist, userInfo}) => {
        if (!isExist) signUp();
        else {
          setUser(userInfo as User);
          setIsAuthenticated(true);
          setIsLoading(false);
          // getAttributes().then(
          //   (cognitoAttrs) => {
          //     const input = {
          //       id: cognitoAttrs.sub,
          //       name: cognitoAttrs.name,
          //       teams:
          //     } as User;
          //     setUser(input);
          //     setIsAuthenticated(true);
          //     setIsLoading(false);
          //   }
          // )
        }
      }
    )
  };

  const signOut = () => {
    setUser({
      id: '',
      name: '',
      teams: []
    });
    setIsAuthenticated(false);
  };

  return (
    <ApolloUserContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        signUp,
        signOut,
        user,
        error,
      }}
    >
      {props.children}
    </ApolloUserContext.Provider>
  )
};

export default ApolloUserProvider;
