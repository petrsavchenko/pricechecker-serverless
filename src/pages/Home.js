import React, {useState, useEffect} from "react";
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

import {CrawlerCard} from '../components';

import { getCrawlers } from "../api";


const mockedData = [
    {
        name: "Christmas Gift",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/4_WW-restaurant_4.jpg",
        desiredPrice: "120",
        price: '100',
        status: 'Finalized',
        lastCheck: new Date()
    }, {
        name: "Book",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/YYMu-restaurant_3.jpg",
        desiredPrice: "50",
        price: '45',
        status: 'Ready to buy',
        lastCheck: new Date()
    }, {
        name: "Bike",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/dobe-restaurant_2.jpg",
        desiredPrice: "80",
        price: '1050',
        status: 'Processing',
        lastCheck: new Date()
    }, {
        name: "Surfboard",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/HlXm-restaurant_1.jpg",
        desiredPrice: "400",
        price: '450',
        status: 'Processing',
        lastCheck: new Date()
    }, {
        name: "Flight",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/4_WW-restaurant_4.jpg",
        desiredPrice: "1023",
        price: '2000',
        status: 'Processing',
        lastCheck: new Date()
    },
];

export const Home = ({ size }) => {
    const [data, setData] = useState([]);
 
    useEffect(() => {
      const fetchData = async () => {
        setData(await getCrawlers());
      };
   
      fetchData();
    }, []);

    console.log(data);

    return <Grid
        columns={size !== 'small' ? 'medium' : '100%'} 
        gap="small"
        pad='small'
    >
        {data.map((crawler, index) => (
            <CrawlerCard crawler={crawler}/>
        ))}
    </Grid>
};
