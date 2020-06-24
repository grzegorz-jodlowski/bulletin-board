import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cards.module.scss';

import { Card } from '../../common/Card/Card';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;

    fetchPublishedPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Container className={styles.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

Component.propTypes = {
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as Cards,
  Component as CardsComponent, //for tests
};

