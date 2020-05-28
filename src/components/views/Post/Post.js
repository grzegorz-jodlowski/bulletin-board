import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Post.module.scss';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '.2s',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    padding: '16px',
    position: 'relative',
  },
  detail: {
    color: theme.palette.primary.main,
    fontWeight: '700',
    paddingTop: '16px',
  },
  status: {
    color: 'red',
  },
  publicationDate: {
    position: 'absolute',
    bottom: '10px',
    right: '15px',
    fontStyle: 'italic',
  },
}));


const Component = ({ posts, match, isLogged, currentUser }) => {
  const classes = useStyles();

  const post = posts.find(el => el.id === match.params.id);

  const { title, image, imageTitle, description, price, id, phone, authorName, authorEmail, status, publicationDate, authorId: postAuthorId } = post;
  const { isAdmin, id: userId } = currentUser;

  const isPostAuthor = postAuthorId === userId ? true : false;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title={imageTitle}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
            <Typography className={classes.detail}>
              {`Price: ${price}$`}
            </Typography>
            <Typography className={classes.detail}>
              {`Phone: ${phone}`}
            </Typography>
            <Typography className={classes.detail}>
              {`Seller: ${authorName}`}
            </Typography>
            {(isLogged && (isPostAuthor || isAdmin)) && (<Typography className={clsx(classes.detail, classes.status)}>
              {`Status: ${status}`}
            </Typography>)}

          </CardContent>
          <CardActions className={classes.cardActions}>
            {(isLogged && (isPostAuthor || isAdmin)) && (<Button size="medium" color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/post/${id}/edit`}>
              Edit
            </Button>)}
            <Button size="medium" color="primary" variant="contained" href={`mailto:${authorEmail}`}>
              Email to seller
            </Button>
            <Typography className={classes.publicationDate}>
              {`${publicationDate}`}
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

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

