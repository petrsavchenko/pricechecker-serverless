import React, { Component } from "react";

import {
  Box,
  Button,
  Collapsible,
  Image,
  Heading,
  Paragraph,
  Text,
  ThemeContext,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
} from "grommet";

import * as Icons from 'grommet-icons';

const getStatusColor = (status) => {
    switch (status) {
        case 'Finalized':
            return 'status-ok';
        case 'Ready to buy':
            return 'status-critical';
        case 'Processing':
            return 'status-warning';
        default:
            throw new Error('Undefined status');
    }
}

export const CrawlerCard = ({crawler}) => (            
    <Card height="medium" width="medium" pad='small' background="light-1">
        <CardHeader 
            pad="medium"
            height='small'
        >
            <Box height='small'>
                <Image src={crawler.image} fit="cover" />
            </Box>
        </CardHeader>
        <CardBody 
            pad={{horizontal: "small"}}
        >
            <Box
                margin={{ top: "small" }}
                direction="row"
                align="center"
                justify="between"
            >
                <Box>
                    <Heading level="3" margin="none">
                        {crawler.name}
                    </Heading>
                    <Box 
                    >
                        <Text size='medium' color={getStatusColor(crawler.status)}>{crawler.status}</Text> 
                        <Text size='small' color="dark-5" >
                            ${crawler.price} checked at {crawler.lastCheck?.toLocaleTimeString()}
                        </Text>
                    </Box>
                </Box>
                <Text color="dark-5" size="large" align="end" justify="betwen">
                    ${crawler.desiredPrice}
                </Text>
          </Box>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
            <Button icon={<Icons.Favorite color="red" />} hoverIndicator />
            <Button icon={<Icons.ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
    </Card>);