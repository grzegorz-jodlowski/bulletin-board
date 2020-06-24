import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

import { Link } from 'react-router-dom';

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

    <h1>Oops! Page not found!</h1>
    <div className={styles.btn}><Link to={`${process.env.PUBLIC_URL}/`} > Return to Homepage</Link></div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent, //for tests
};

