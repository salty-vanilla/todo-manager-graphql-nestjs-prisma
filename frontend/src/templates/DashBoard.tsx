import { useLazyQuery, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectsQuery } from '../graphql/query/getProjects';

const DashBoard = () => {
  const { data, loading, error } = useQuery(getProjectsQuery);
  if (loading) return <p>Loading...</p>;
	if (error) return <p>Error! {error.message}</p>;

  console.log(data);
  return (
    <div>
			{
        data.projects.map((project: { id: string; name: string }) => (
          <p>{project.name}</p>
        ))
      }
    </div>
  );
}

export default DashBoard;
