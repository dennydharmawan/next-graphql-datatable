import Link from 'next/link';
import Layout from '../components/Layout';
import AllUsers from '../components/UserDataTable';

const IndexPage = () => (
  <Layout>
    <AllUsers />
  </Layout>
);

export default IndexPage;
