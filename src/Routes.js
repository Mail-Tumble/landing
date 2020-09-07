import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { PresentationLayout } from './layout-blueprints';

import Homepage from './pages/Homepage';
import Privacy from './pages/Privacy';

const Routes = () => {
  const location = useLocation();

  const { search: query } = location;
  const search = new URLSearchParams(query);

  const redirectLocation = {
    ...location,
    pathname:
      '/redirect' + (search.get('p') || '/nopage').replace(/\.html$/, ''),
    search: ''
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <PresentationLayout>
        <Switch location={redirectLocation} key={redirectLocation.pathname}>
          <Route path={'/redirect/privacy'}>
            <Redirect to={'/privacy'} />
          </Route>
        </Switch>
        <Switch location={location} key={location.pathname}>
          <Route path={'/privacy'}>
            <Privacy />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </PresentationLayout>
    </ThemeProvider>
  );
};

export default Routes;
