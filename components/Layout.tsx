import PropTypes, { InferProps } from 'prop-types';
import Header from './Header';
import { Grid, Container } from '@material-ui/core';

function Layout({ children }: InferProps<typeof Layout.propTypes>) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12}>
        <header>
          <Header />
        </header>
      </Grid>
      <Grid item xs={12}>
        <main>
          <Container maxWidth={false}>{children}</Container>
        </main>
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
