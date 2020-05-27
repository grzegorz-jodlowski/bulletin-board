import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.face}>
      <div className={styles.band}>
        <div className={styles.red}></div>
        <div className={styles.white}></div>
        <div className={styles.blue}></div>
      </div>
      <div className={styles.eyes}></div>
      <div className={styles.dimples}></div>
      <div className={styles.mouth}></div>
    </div>

    <h1>Oops! Something went wrong!</h1>
    <div className={styles.btn} href={`${process.env.PUBLIC_URL}/`}>Return to Home</div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent, //for tests
};

