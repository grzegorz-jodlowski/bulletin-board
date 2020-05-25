import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { PageNav } from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      {children}
    </Container>

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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent, //for tests
};

