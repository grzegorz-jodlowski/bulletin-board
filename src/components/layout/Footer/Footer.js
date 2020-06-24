import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import Typography from '@material-ui/core/Typography';

import { Copyright } from '../../common/Copyright/Copyright';

const Component = ({ className, children }) => (
  <footer className={clsx(className, styles.root)}>
    <Typography variant="h6" align="center" gutterBottom>
      Announce It!
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Local announcements and advertisements for free
    </Typography>
    <Copyright />
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent, //for tests
};

