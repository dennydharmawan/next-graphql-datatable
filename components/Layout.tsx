import Header from './Header';
import { Grid, Container } from '@material-ui/core';

type Renderable = React.ReactChild | Renderable[];

type Props = {
  children: ((x: number) => Renderable) | Renderable;
};

//https://stackoverflow.com/questions/59712851/react-typescript-function-component-typing
const Layout: React.FC<Props> = ({ children }) => {
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
};

export default Layout;
