import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const useStyles = makeStyles((theme) => ({
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
  hoverScale: {
    '&:hover': {
      transform: 'scale(1.04)',
    },
  },
  link: {
    textDecoration: 'none',
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: '700',
  },

}));

const Component = ({ post, hoverScale }) => {
  const classes = useStyles();

  const { title, image, imageTitle, description, id, price } = post;

  return (
    <Link to={`${process.env.PUBLIC_URL}/post/${id}`} className={classes.link}>
      <Card className={hoverScale ? clsx(classes.card, classes.hoverScale) : classes.card}>
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
          <Typography className={classes.price}>
            {`Price: ${price}$`}
          </Typography>
        </CardActions>
      </Card>
    </Link >
  );
};
Component.propTypes = {
  hoverScale: PropTypes.bool,
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

