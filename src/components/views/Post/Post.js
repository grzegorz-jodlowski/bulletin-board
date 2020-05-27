import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Post.module.scss';

import { Card } from '../../common/Card/Card';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


const Component = ({ className, posts, match }) => {
  const classes = useStyles();

  const post = posts.find(el => el.id === match.params.id);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid item key={post.title}>
        <Card post={post} hoverScale={false} />
      </Grid>
    </Container>
  );
};

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  ReduxContainer as Post,
  Component as PostComponent, //for tests
};

