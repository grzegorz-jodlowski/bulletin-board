import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


const Component = ({ className, isLogged }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Bulletin board
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Do you want to clean space around you? Add and sell things you no longer need. Help others find something interesting!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {isLogged && <Button variant="contained" color="primary" href={`${process.env.PUBLIC_URL}/post/add`}>
                Add new
              </Button>}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as Hero,
  ReduxContainer as Hero,
  Component as HeroComponent, //for tests
};

