import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Login.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Podstrona logowania - endpoint do autoryzacji google</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Login,
  Component as LoginComponent, //for tests
};

