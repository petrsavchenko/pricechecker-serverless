import {
    Text,
    Footer as FooterCore,
    Anchor
} from 'grommet';

import * as Icons from 'grommet-icons';
import React, { useState } from 'react';

export const Footer = () => (
    <FooterCore pad="small">
        <Text>&copy; {new Date().getFullYear()}</Text>
        <Anchor label="About" />
    </FooterCore>
)

