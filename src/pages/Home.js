import React, { useContext } from "react";
import { Grid } from 'grommet';

import { CrawlerCard } from '../components';
import { AppContext } from "../appContext";


export const Home = ({ size }) => {
    const [state] = useContext(AppContext);

    return <Grid
          columns={size !== 'small' ? 'medium' : '100%'} 
          gap="small"
          pad='small'
      >
          {state.crawlers.map(crawler => (
            <CrawlerCard key={crawler.id} crawler={crawler}/>
          ))}
      </Grid>
};
