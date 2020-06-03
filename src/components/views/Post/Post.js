import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Post.module.scss';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCurrentPost, fetchPostDetails } from '../../../redux/postsRedux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';

class Component extends React.Component {
  componentDidMount() {
    const { match, fetchPostDetails } = this.props;
    fetchPostDetails(match.params._id);
  }

  render() {
    const { post, isLogged, currentUser } = this.props;

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
              {(isLogged && (isPostAuthor || isAdmin)) && (<Button component={Link} size="medium" color="primary" variant="contained" to={`${process.env.PUBLIC_URL}/post/${_id}/edit`}>
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
  post: PropTypes.object,
  match: PropTypes.object,
  currentUser: PropTypes.object,
  isLogged: PropTypes.bool,
  fetchPostDetails: PropTypes.func,
};

const mapStateToProps = state => ({
  post: getCurrentPost(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPostDetails: (id) => dispatch(fetchPostDetails(id)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Post,
  ReduxContainer as Post,
  Component as PostComponent, //for tests
};

