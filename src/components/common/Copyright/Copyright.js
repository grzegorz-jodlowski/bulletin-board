import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Copyright.module.scss';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/grzegorz-jodlowski">
        GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Copyright,
  Component as CopyrightComponent, //for tests
};

