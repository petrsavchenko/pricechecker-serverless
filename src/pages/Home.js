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

const mockedData = [
    {
        name: "Christmas Gift",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/4_WW-restaurant_4.jpg",
        desiredPrice: "120",
    }, {
        name: "Book",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/YYMu-restaurant_3.jpg",
        desiredPrice: "50",
    }, {
        name: "Bike",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/dobe-restaurant_2.jpg",
        desiredPrice: "80",
    }, {
        name: "Surfboard",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/HlXm-restaurant_1.jpg",
        desiredPrice: "400",
    }, {
        name: "Flight",
        image:
          "https://uploads.codesandbox.io/uploads/user/5cb9a0d4-583b-4f51-aaa5-feb80db2b623/4_WW-restaurant_4.jpg",
        desiredPrice: "1023",
    },
];

export const Home = ({size}) => (
    <Grid
        columns={size !== 'small' ? 'small' : '100%'} 
        gap="small"
        pad='medium'
    >
        {mockedData.map((item, index) => (
            <Card  height="small" width="small" background="light-1">
                <CardHeader pad="medium">{item.name}</CardHeader>
                <CardBody pad="medium">I want to buy it for ${item.desiredPrice}</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <Button
                icon={<Icons.Favorite color="red" />}
                hoverIndicator
                />
                <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
        ))}
    </Grid>
);
