import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Cards.module.scss';

import { Card } from '../../common/Card/Card';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Component = ({ className, posts }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.title} xs={12} sm={6} md={4}>
              <Card post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as Cards,
  ReduxContainer as Cards,
  Component as CardsComponent, //for tests
};

