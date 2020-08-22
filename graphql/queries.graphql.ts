import { gql } from 'graphql-request';

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`;

type AllUsersData = {
  allUsers: {
    id: string;
    name: string;
  }[];
};
