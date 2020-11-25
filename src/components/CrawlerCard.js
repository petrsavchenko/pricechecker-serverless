import React, { useContext } from "react";

import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "grommet";

import * as Icons from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { deleteCrawler } from "../api";
import { AppContext } from "../appContext";

const getStatusColor = (status) => {
    switch (status) {
        case 'Finalized':
            return 'status-ok';
        case 'Ready to buy':
            return 'status-critical';
        case 'Processing':
            return 'status-warning';
        default:
            return 'status-unknown';
    }
}

export const CrawlerCard = ({ crawler }) => {
    const [, dispatch] = useContext(AppContext);

    const history = useHistory();
    const onEditClick = path => history.push(path);

    const onDeleteClick = async id => {
        await deleteCrawler(id);
        dispatch({ type: "DELETE_CRAWLER", payload: id });
    }
    const onExternalClick = url => window.open(url, '_blank');
     
    return <Card height="medium" width="medium" pad='small' background="light-1">
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
                    
                    <Box>
                        <Text size='medium' color={getStatusColor(crawler.status)}>{crawler.status ? crawler.status : 'To be processed'}</Text>
                        {crawler.lastCheck && 
                        <Text size='small' color="dark-5" >
                            ${crawler.price} {crawler.lastCheck && `checked at ${new Date(crawler.lastCheck).toLocaleTimeString()}`}
                        </Text>
                        }
                    </Box>
                </Box>
                <Text color="dark-5" size="large" align="end" justify="betwen">
                    ${crawler.desiredPrice}
                </Text>
          </Box>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
            <Button icon={<Icons.Trash color="red" />} hoverIndicator placeholder='delete' onClick={onDeleteClick.bind(null, crawler.id)}/>
            <Button icon={<Icons.Edit color="plain" />} hoverIndicator placeholder='edit' onClick={onEditClick.bind(null, `/${crawler.id}`)} />
            {/* <Button color='brand' size='medium'><strong>DETAILS</strong></Button>  */}
            <Button icon={<Icons.Share color="plain" />} hoverIndicator placeholder='go to amazon' onClick={onExternalClick.bind(null, crawler.url)}/>
        </CardFooter>
    </Card>;
};