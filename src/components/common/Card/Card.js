import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { Link } from 'react-router-dom';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '.2s',
    '&:hover': {
      transform: 'scale(1.04)',
    },
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: '700',
  },
}));

const Component = ({ post }) => {
  const classes = useStyles();

  const { title, photo, id, author, created, price } = post;

  return (
    <Link to={`${process.env.PUBLIC_URL}/post/${id}`} className={classes.link}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={photo}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            Tap to read more...
          </Typography>
        </CardContent>
        <CardActions>
          <Typography className={classes.price}>
            {`Price: ${price}$`}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
};
Component.propTypes = {
  post: PropTypes.object,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Card,
  // Container as Card,
  Component as CardComponent, //for tests
};

