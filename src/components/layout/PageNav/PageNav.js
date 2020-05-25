import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';


import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, isLogged }) => (
  <div className={clsx(className, styles.root)}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Homepage</Button>
    {isLogged
      ? <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Log Out</Button>
      : <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Log In</Button>
    }
  </div>
);

Component.propTypes = {
  isLogged: PropTypes.bool,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PageNav,
  Container as PageNav,
  Component as PageNavComponent, //for tests
};

