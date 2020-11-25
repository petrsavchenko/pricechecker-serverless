import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
   Box,
   Grommet,
   ResponsiveContext,
} from 'grommet';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { theme } from "./theme";
import { Home, NotFound } from './pages';
import { CrawlerForm, Sidebar } from "./components";
import { AppContextProvider } from "./appContext";
import { IdPattern, NewPattern } from "./config";

function App() {
  return (
    <Router>
      <Grommet theme={theme} full>
      <AppContextProvider>
        <ResponsiveContext.Consumer>
          {size => (
            <Box direction='row' fill overflow='hidden'>
                <Sidebar />
                <Box fill overflow='auto'>
                  <Switch>
                    <Route path="/" exact component={() => <Home size={size} />} />
                    <Route path={`/:id(${IdPattern}|${NewPattern})`} component={CrawlerForm} />
                    <Route component={NotFound} />
                  </Switch>
                </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </AppContextProvider>
      </Grommet>
    </Router>
  );
}

export default withAuthenticator(App);
