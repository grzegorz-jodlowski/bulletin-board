import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostAdd.module.scss';

import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { postToAPI } from '../../../redux/postsRedux';

import { Login } from '../Login/Login';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class Component extends React.Component {
  state = {
    author: '',
    created: '',
    updated: '',
    status: '',
    title: '',
    text: '',
    photo: '',
    price: '',
    phone: '',
    location: '',
  }

  handleClick() {
    const { postToAPI } = this.props;

    const currentDate = new Date();

    this.setState({ created: currentDate.toISOString(), updated: currentDate.toISOString(), status: 'published' }, () => {
      postToAPI(this.state);
      this.setState({
        author: '',
        created: '',
        updated: '',
        status: '',
        title: '',
        text: '',
        photo: '',
        price: '',
        phone: '',
        location: '',
      });
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
                  value={this.state.author}
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
                  value={this.state.title}
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
                  value={this.state.text}
                  onChange={(e) => this.setState({ text: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  value={this.state.price}
                  onChange={(e) => this.setState({ price: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="photo"
                  name="photo"
                  label="Image link"
                  fullWidth
                  value={this.state.photo}
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
  postToAPI: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

const mapDispatchToProps = dispatch => ({
  postToAPI: (post) => dispatch(postToAPI(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent, //for tests
};

