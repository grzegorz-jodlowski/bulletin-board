import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Cards.module.scss';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Component = ({ className, children, posts }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, styles.root)}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map(({ title, image, imageTitle, description, id }) => (
            <Grid item key={title} xs={12} sm={6} md={4}>
              <Link href={`${process.env.PUBLIC_URL}/post/${id}`}>
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
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary" href={`${process.env.PUBLIC_URL}/post/${id}`}>
                    View
                  </Button> */}
                    {/* <Button size="small" color="primary">
                    Edit
                  </Button> */}
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
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

