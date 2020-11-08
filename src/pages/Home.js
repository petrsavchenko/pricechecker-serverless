import React, {useState, useEffect, useContext} from "react";
import { Grid } from 'grommet';
import {CrawlerCard} from '../components';
import { getCrawlers } from "../api";
import { AppContext } from "../appContext";


export const Home = ({ size }) => {
    const [state, dispatch] = useContext(AppContext);
 
    useEffect(() => {
      const fetchData = async () => {
        dispatch({
          type: "ADD_CRAWLERS",
          payload: await getCrawlers()
        });
      };
   
      fetchData();
    }, []);

    return <Grid
          columns={size !== 'small' ? 'medium' : '100%'} 
          gap="small"
          pad='small'
      >
          {state.crawlers.map((crawler) => (
            <CrawlerCard key={crawler.id} crawler={crawler}/>
          ))}
      </Grid>
};
