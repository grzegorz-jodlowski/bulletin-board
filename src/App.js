import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { MyPosts } from './components/views/MyPosts/MyPosts';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#c0c0c0',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/post/:id/edit' component={PostEdit} />
              <Route exact path='/posts' component={MyPosts} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
