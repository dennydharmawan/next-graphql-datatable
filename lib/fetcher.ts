import { RequestDocument } from 'graphql-request/dist/types';
import request from 'graphql-request';

export const gqlFetcher = (query: RequestDocument) =>
  request(process.env.NEXT_PUBLIC_GQL!, query);
