import React, { useState } from 'react';
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

import { withAuthenticator } from '@aws-amplify/ui-react'

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  const theme = {
    global: {
      // colors: {
      //   brand: '#228BE6',
      // },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
<Grommet theme={theme} full themeMode='dark'>
 <ResponsiveContext.Consumer>
  {size => (
      <Box fill>
        <AppBar>
          <Nav direction="row" background="brand" pad="medium">
            <Anchor icon={<Icons.Home />} hoverIndicator />
            <Anchor icon={<Icons.Notification />} hoverIndicator />
            <Anchor icon={<Icons.ChatOption />} hoverIndicator />
          </Nav>
          <Button
            icon={<Notification />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
         {(!showSidebar || size !== 'small') ? (
           <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            </Collapsible>): (
            <Layer>
               <Box
                  background='light-2'
                  tag='header'
                  justify='end'
                  align='center'
                  direction='row'
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
              <Box
                fill
                background='light-2'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            </Layer>
         )}
       </Box>
     </Box>
   )}
 </ResponsiveContext.Consumer>
</Grommet>
  );
}

export default withAuthenticator(App);
