import {
    Nav,
    Avatar,
    Button,
    Sidebar as SidebarCore,
    Menu,
    Text
} from 'grommet';

import * as Icons from 'grommet-icons';
import React  from 'react';
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom';

export const Sidebar = () => {
    const history = useHistory();
    const onClick = path => history.push(path);
    const signOut = async () => {
      try {
          await Auth.signOut();
          history.go(0);
      } catch (error) {
          console.log('error signing out: ', error);
      }
    }

    return <SidebarCore background="brand"
        footer={
            <Menu
              pad='none'
              dropAlign={{ bottom: "top" }}
              icon={false}
              items={[{
                label: <Text pad="none" size="small">Logout</Text>,
                onClick: signOut
              }]}
              label={<Avatar size='small' pad='none'><Icons.User /></Avatar>}
            />
        }
      >
        <Nav gap='small'>
            <Button icon={<Icons.Add />} hoverIndicator placeholder='new crawler' onClick={onClick.bind(null, '/new')} />
            <Button icon={<Icons.Home />} hoverIndicator onClick={onClick.bind(null, '/')} />
        </Nav>
      </SidebarCore>
}

