import React, {useState, useEffect} from "react";
import { Grid } from 'grommet';
import {CrawlerCard} from '../components';
import { getCrawlers } from "../api";

export const Home = ({ size }) => {
    const [data, setData] = useState([]);
 
    useEffect(() => {
      const fetchData = async () => {
        setData(await getCrawlers());
      };
   
      fetchData();
    }, []);

    return <Grid
        columns={size !== 'small' ? 'medium' : '100%'} 
        gap="small"
        pad='small'
    >
        {data.map((crawler) => (
            <CrawlerCard crawler={crawler}/>
        ))}
    </Grid>
};
