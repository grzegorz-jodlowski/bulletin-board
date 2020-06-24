import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';

import { Hero } from '../../layout/Hero/Hero';
import { Cards } from '../../layout/Cards/Cards';

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

export {
  Component as Homepage,
  Component as HomepageComponent, //for tests
};

