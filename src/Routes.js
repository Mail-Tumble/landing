import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import {
  PresentationLayout
} from './layout-blueprints';


import Homepage from './pages/Homepage';

const Routes = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={MuiTheme}>
      <PresentationLayout>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Homepage} />
        </Switch>
      </PresentationLayout>
    </ThemeProvider>
  );
};

export default Routes;
