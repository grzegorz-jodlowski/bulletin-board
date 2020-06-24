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
import { updateAdminStatus } from '../../../redux/userRedux';

const Component = ({ className, children, updateLoginStatus, updateAdminStatus }) => (
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
      <select onChange={(e) => {
        if (e.target.value === 'login') {
          updateLoginStatus('login');
          updateAdminStatus(false);
        } else if (e.target.value === 'admin') {
          console.log(' : e.target.value', e.target.value);
          updateAdminStatus(true);
          updateLoginStatus('login');
        } else {
          updateLoginStatus('logout');
          updateAdminStatus(false);
        }
      }}>
        <option value="login">Login</option>
        <option value="logout">Logout</option>
        <option value="admin">admin</option>
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
  updateAdminStatus: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  updateAdminStatus: log => dispatch(updateAdminStatus(log)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as MainLayout,
  Component as MainLayoutComponent, //for tests
};

