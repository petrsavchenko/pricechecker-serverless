import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Grid,
    Button,
    Box,
} from 'grommet';

import * as Icons from 'grommet-icons';

import { CrawlerForm } from '../components';


const getCrawler = (id) => {
    return  {
            name: "Christmas Gift",
            url: "https://azbyka.ru/",
            image:
            "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/4_WW-restaurant_4.jpg",
            desiredPrice: "120",
            price: '100',
            status: 'Finalized',
            lastCheck: new Date()
        }
}

export const Modify = ({ id }) => (
    <CrawlerForm {...getCrawler(id)} />
);
