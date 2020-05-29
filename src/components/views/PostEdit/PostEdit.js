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

const Component = ({ isLogged, currentUser, match, posts }) => {
  const post = posts.find(el => el.id === match.params.id);

  const { authorId: postAuthorId } = post;
  const { isAdmin, id: userId } = currentUser;

  const isPostAuthor = postAuthorId === userId ? true : false;

  if (isLogged && (isPostAuthor || isAdmin)) {
    return (
      <div>
        <h2>PostEdit</h2>
      </div>
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

