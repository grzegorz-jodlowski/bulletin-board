import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PostEdit.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
import { getCurrentPost, fetchPostDetails } from '../../../redux/postsRedux';

import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class Component extends React.Component {
  componentDidMount() {
    const { match, fetchPostDetails } = this.props;
    fetchPostDetails(match.params._id);
  }

  render() {
    const { post, isLogged, currentUser } = this.props;

    const { title, photo, text, price, phone, author } = post;
    const { isAdmin, email } = currentUser;

    const isPostAuthor = author === email ? true : false;

    if (isLogged && (isPostAuthor || isAdmin)) {
      return (
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Typography className={styles.header} component="h1" variant="h4" align="center">
              Edit your ad
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="author"
                  name="author"
                  label="Email address"
                  fullWidth
                  autoComplete="email"
                  value={author}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="text"
                  name="text"
                  label="Description"
                  fullWidth
                  value={text}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  value={phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  value={price}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="photo"
                  name="photo"
                  label="Image link"
                  fullWidth
                  value={photo}
                />
              </Grid>
            </Grid>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Edit
              </Button>
            </div>
          </Paper>
        </main>
      );
    } else if (isLogged) {
      return <NotFound />;
    } else {
      return <Login />;
    }
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent, //for tests
};

