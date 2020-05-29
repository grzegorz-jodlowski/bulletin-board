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

  const post = posts.find(el => el.id === match.params.id);

  const { title, image, imageTitle, description, price, id, phone, authorName, authorEmail, status, publicationDate, authorId: postAuthorId } = post;
  const { isAdmin, id: userId } = currentUser;

  const isPostAuthor = postAuthorId === userId ? true : false;

  if (isLogged && (isPostAuthor || isAdmin)) {
    return (
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography className={classes.header} component="h1" variant="h4" align="center">
            Edit your ad
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="authorName"
                name="authorName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                value={authorName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="authorEmail"
                name="authorEmail"
                label="Email address"
                fullWidth
                autoComplete="email"
                value={authorEmail}

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
                id="description"
                name="description"
                label="Description"
                fullWidth
                value={description}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                value={phone}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Price"
                fullWidth
                value={price}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="image"
                name="image"
                label="Image link"
                fullWidth
                value={image}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="imageTitle"
                name="imageTitle"
                label="Image title"
                fullWidth
                value={imageTitle}

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

