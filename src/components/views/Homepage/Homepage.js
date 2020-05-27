import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import { Hero } from '../../layout/Hero/Hero';
import { Cards } from '../../layout/Cards/Cards';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root)}>
    <Hero />
    <Cards />
  </main>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent, //for tests
};
