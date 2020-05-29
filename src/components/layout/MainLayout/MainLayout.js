import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { PageNav } from '../PageNav/PageNav';
import { Footer } from '../Footer/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

const Component = ({ className, children, updateLoginStatus }) => (
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
      <select onChange={(e) => updateLoginStatus(e.target.value)} >
        <option value="login">Login</option>
        <option value="logout">Logout</option>
      </select>
      {children}
    </Container>
    <Footer />

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  ReduxContainer as MainLayout,
  Component as MainLayoutComponent, //for tests
};

