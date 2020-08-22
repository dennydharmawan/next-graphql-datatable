import useSWR from 'swr';
import { AllUsersQuery } from '../graphql/queries.graphql';
import { gqlFetcher } from '../lib/fetcher';

const AllUsers = () => {
  const { data, error, isValidating, mutate } = useSWR(AllUsersQuery);

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <p>There are {data?.allUsers?.length} user(s) in the database:</p>
      <ul>
        {data?.allUsers?.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
