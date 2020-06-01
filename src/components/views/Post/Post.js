import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Post.module.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';

class Component extends React.Component {
  render() {
    const { posts, isLogged, match, currentUser } = this.props;

    const post = posts.find(el => el._id === match.params._id);

    const { title, photo, text, price, _id, phone, author, status, created } = post;
    const { isAdmin, email } = currentUser;

    const isPostAuthor = author === email ? true : false;

    return (
      <Container className={styles.cardGrid} maxWidth="md">
        <Grid item>
          <Card className={styles.card}>
            <CardMedia
              className={styles.cardMedia}
              image={photo}
            />
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography>
                {text}
              </Typography>
              <Typography className={styles.detail}>
                {`Price: ${price}$`}
              </Typography>
              <Typography className={styles.detail}>
                {`Phone: ${phone}`}
              </Typography>
              {(isLogged && (isPostAuthor || isAdmin)) && (<Typography className={clsx(styles.detail, styles.status)}>
                {`Status: ${status}`}
              </Typography>)}

            </CardContent>
            <CardActions className={styles.cardActions}>
              {(isLogged && (isPostAuthor || isAdmin)) && (<Button size="medium" color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/post/${_id}/edit`}>
                Edit
              </Button>)}
              <Button size="medium" color="primary" variant="contained" href={`mailto:${author}`}>
                Email to seller
              </Button>
              <Typography className={styles.created}>
                {`${created}`}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    );
  }
}

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.object,
  currentUser: PropTypes.object,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
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

