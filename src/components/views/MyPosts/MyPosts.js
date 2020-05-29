import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyPosts.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';

import { Login } from '../Login/Login';

const Component = ({ isLogged }) => {

  if (isLogged) {
    return (
      <div >
        <h2>MyPosts</h2>
      </div>
    );
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  isLogged: PropTypes.bool,

};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as MyPosts,
  Container as MyPosts,
  Component as MyPostsComponent, //for tests
};

