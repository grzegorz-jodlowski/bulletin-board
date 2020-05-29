import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyPosts.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { getAll } from '../../../redux/postsRedux';
import { getCurrentUser } from '../../../redux/userRedux';

import { Login } from '../Login/Login';
import { Card } from '../../common/Card/Card';


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Component = ({ isLogged, posts, currentUser }) => {
  const classes = useStyles();

  const { isAdmin, id: userId } = currentUser;
  if (isLogged) {
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => {
            if (post.authorId === userId) {
              return (<Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card post={post} />
              </Grid>);
            } else if (isAdmin) {
              return (<Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card post={post} />
              </Grid>);
            } else {
              return null;
            }
          })}
        </Grid>
      </Container>
    );
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  isLogged: PropTypes.bool,
  posts: PropTypes.array,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
  posts: getAll(state),
  currentUser: getCurrentUser(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as MyPosts,
  ReduxContainer as MyPosts,
  Component as MyPostsComponent, //for tests
};

