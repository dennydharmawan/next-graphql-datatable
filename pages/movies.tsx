import { NextPageContext, GetServerSideProps, NextPage } from 'next';

import { NextSeo } from 'next-seo';
import { request, gql } from 'graphql-request';
import useSWR, { keyInterface } from 'swr';
import { Button } from '@material-ui/core';
import { RequestDocument } from 'graphql-request/dist/types';
import Layout from '../components/Layout';

// https://dev.to/aryanjnyc/i-migrated-away-from-apollo-client-to-vercel-swr-and-prisma-graphql-request-and-you-can-too-245b
// https://dev.to/ryanccn/data-fetching-with-next-js-38b6
//const { data, error, isValidating, mutate } = useSWR(key, fetcher, options)

interface Props {
  movies: object;
}

const movies: NextPage<Props> = ({ movies }) => {
  <NextSeo
    title="Movies"
    canonical={`${process.env.CANONICAL_URL}/about`}
    openGraph={{
      url: `${process.env.CANONICAL_URL}/about`,
      title: 'Movies | My Site',
    }}
  />;

  const API = 'https://api.graph.cool/simple/v1/movies';
  const fetcher = async (query: RequestDocument) => {
    console.log('fetching');
    return request(API, query);
  };

  const { data, error, isValidating, mutate } = useSWR(
    gql`
      {
        Movie(title: "Inception") {
          title
          releaseDate
          actors {
            name
          }
        }
      }
    ` as keyInterface,
    fetcher,
    {
      initialData: movies,
    }
  );

  if (error) {
    console.log(error);

    return <div>failed to load</div>;
  }
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <NextSeo
        title="Movies"
        canonical={`${process.env.CANONICAL_URL}/about`}
        openGraph={{
          url: `${process.env.CANONICAL_URL}/about`,
          title: 'About | My Site',
        }}
      />

      <div>{isValidating.toString()}</div>
      <div>{data.Movie.title}</div>
      <div>{data.Movie.releaseDate}</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          mutate();
        }}
      >
        Update
      </Button>
    </Layout>
  );
};

export default movies;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const API = 'https://api.graph.cool/simple/v1/movies';

  const movies = await request(
    API,
    gql`
      query movie {
        Movie(title: "Inception") {
          title
          releaseDate
          actors {
            name
          }
        }
      }
    `
  );

  return {
    props: { movies }, // will be passed to the page component as props
  };
};

/*
import useSWR from 'swr'
import { useQuery } from 'urql'

export const pageQuery = `
  query GetTodos($limit: Int!) {
    todos(limit: $limit) {
      id
      text
      isDone
    }
  }
`

function Profile ({ children, ...props }) {
  const { data, error } = useSWR(
    pageQuery, 
    (query) => {
      const [{ error, fetching, data}] = useQuery({
        query,
        variables: { limit: props.limit },
        ...otherURQLsettings
      })
      return { error, data: fetching ? false : data }
    }
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
*/
