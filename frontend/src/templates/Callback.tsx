import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "urql";
import { createUserMutation } from "../graphql/mutation/createUser";
import { getUserQuery } from "../graphql/query/getUser";
import { Mutation, MutationCreateUserArgs, Query } from "../types/generated/graphql";

const CallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [{ data, fetching }] = useQuery<Query['getUser']>({
    query: getUserQuery,
    pause: !user,
  });
  const [_, createUser] = useMutation<
    Mutation['createUser'],
    MutationCreateUserArgs
  >(createUserMutation);

  console.log({ user, data });

  useEffect(() => {
    if (!user) return;
    if (fetching) return;

    if (!data?.id) {
      console.log(user.sub, user.name);
      createUser({
        id: user.sub as string,
        input: {
          name: user.name as string,
        },
      })
        .then((data) => {
          console.log(data);
          navigate('/todo');
        })
        .catch((e) => console.error(e));
    } else {
      navigate('/todo');
    }
  }, [data, fetching, user]);

  return <div>Loading...</div>
}

export default CallbackPage;
