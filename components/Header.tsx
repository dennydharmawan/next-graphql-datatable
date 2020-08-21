import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { AcUnitRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../lib/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  offset: theme.mixins.toolbar,
});

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography>This is our header</Typography>
          <AcUnitRounded />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
