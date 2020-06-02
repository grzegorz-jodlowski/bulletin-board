import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';

import styles from './PostAdd.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';

import { Login } from '../Login/Login';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class Component extends React.Component {
  state = {
    author: null,
    created: null,
    status: null,
    title: null,
    text: null,
    photo: null,
    price: null,
    phone: null,
    location: null,
  }

  handleClick() {
    const currentDate = new Date();
    this.setState({ created: currentDate.toISOString() }, () => {
      //add func
    });
  }

  render() {
    const { isLogged } = this.props;

    if (isLogged) {
      return (
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Typography className={styles.header} component="h1" variant="h4" align="center">
              Add your new ad
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
                  onChange={(e) => this.setState({ author: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="text"
                  name="text"
                  label="Description"
                  fullWidth
                  onChange={(e) => this.setState({ text: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  onChange={(e) => this.setState({ price: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="photo"
                  name="photo"
                  label="Image link"
                  fullWidth
                  onChange={(e) => this.setState({ photo: e.target.value })}
                />
              </Grid>
            </Grid>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
                onClick={() => this.handleClick()}
              >
                Add
              </Button>
            </div>
          </Paper>
        </main>
      );
    } else {
      return <Login />;
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent, //for tests
};

