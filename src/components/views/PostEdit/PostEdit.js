import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PostEdit.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
import { getAll } from '../../../redux/postsRedux';

import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '25px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

  },
}));

const Component = ({ isLogged, currentUser, match, posts }) => {
  const classes = useStyles();

  const post = posts.find(el => el._id === match.params._id);

  const { title, photo, text, price, _id, phone, author, status, created } = post;
  const { isAdmin, email } = currentUser;

  const isPostAuthor = author === email ? true : false;

  if (isLogged && (isPostAuthor || isAdmin)) {
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.header} component="h1" variant="h4" align="center">
            Edit your ad
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="author"
                name="author"
                label="Email address"
                fullWidth
                autoComplete="email"
                value={author}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="text"
                name="text"
                label="Description"
                fullWidth
                value={text}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                value={phone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="price"
                name="price"
                label="Price"
                fullWidth
                value={price}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="photo"
                name="photo"
                label="Image link"
                fullWidth
                value={photo}
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
          </div>
        </Paper>
      </main>
    );
  } else if (isLogged) {
    return <NotFound />;
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object,
  currentUser: PropTypes.object,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent, //for tests
};

