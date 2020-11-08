import React, { useState } from 'react';
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormClose, Notification } from 'grommet-icons';
import * as Icons from 'grommet-icons'
import {
   Box,
   Button,
   Collapsible,
   Heading,
   Grommet,
   Layer,
   ResponsiveContext,
   Nav,
   Anchor
} from 'grommet';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { theme } from "./theme";
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Home, NotFound, Modify } from './pages';
import { CrawlerForm } from "./components";
import { AppContextProvider } from "./appContext";

const IdPattern = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}';
const NewPattern = 'new';

function App() {
  // const [showSidebar, setShowSidebar] = useState(false);
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
