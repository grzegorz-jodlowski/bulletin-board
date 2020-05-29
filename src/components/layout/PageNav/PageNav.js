import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';
import { updateAdminStatus } from '../../../redux/userRedux';

const Component = ({ className, isLogged, updateLoginStatus, updateAdminStatus }) => (
  <div className={clsx(className, styles.root)}>
    <Button className={clsx(styles.link)} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'><i className={clsx(styles.logo, 'fas fa-bullhorn')}></i>Announce It!</Button>
    <div>
      <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Homepage</Button>
      {isLogged && <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/posts`} activeClassName='active'>My posts</Button>}
      {isLogged
        ? <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active' onClick={() => {
          updateLoginStatus('logout');
          updateAdminStatus(false);
        }}
        >
          Log Out</Button>
        : <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Log In</Button>}
    </div>
  </div>
);

Component.propTypes = {
  isLogged: PropTypes.bool,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,
  updateAdminStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  updateAdminStatus: log => dispatch(updateAdminStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

