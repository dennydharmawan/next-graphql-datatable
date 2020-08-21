import React from 'react';
import Layout from '../components/Layout';
import { Typography, Container } from '@material-ui/core';

export default function index() {
  return (
    <Layout>
      <Typography variant="h1" color="initial">
        <Container>Hello world</Container>
      </Typography>
    </Layout>
  );
}
