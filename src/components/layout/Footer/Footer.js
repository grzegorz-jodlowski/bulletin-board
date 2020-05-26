import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import Typography from '@material-ui/core/Typography';

import { Copyright } from '../../common/Copyright/Copyright';



// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

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

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent, //for tests
};

