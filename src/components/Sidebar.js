import {
    Nav,
    Anchor,
    Avatar,
    Button,
    Sidebar as SidebarCore
} from 'grommet';

import * as Icons from 'grommet-icons';
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

export const Sidebar = () => {
    const history = useHistory();

    const onClick = path => history.push(path);

    return <SidebarCore background="brand" round="small"
        footer={<Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />}
      >
        <Nav gap='small'>
            <Button icon={<Icons.Add />} hoverIndicator placeholder='new crawler' onClick={onClick.bind(null, '/new')} />
            <Button icon={<Icons.Home />} hoverIndicator onClick={onClick.bind(null, '/')} />
        </Nav>
      </SidebarCore>
}

