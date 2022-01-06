import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const style = {
    width: '200%',
    maxWidth: 1660,
    bgcolor: 'secondary.main',
  };
function Details() {
  const params = useParams();
  const { id } = params;
  const country = Object.values(useSelector((state) => state.countries))
    .find((country) => country.id === id);
    console.log("country details", country)
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
   <ListItem button>
      <ListItemText primary="Country" secondary={country ? country.name.toUpperCase() : 'Loading...'} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Infections" secondary={country ? Number(country.today_confirmed).toLocaleString() : '0'} />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Deaths" secondary={country ? Number(country.today_deaths).toLocaleString() : '0'} />
    </ListItem>
    <Divider />
    <ListItem button divider>
    <ListItemText primary="New confirm:" secondary={ country.today_new_confirmed } />
    </ListItem>
    <ListItem button>
    <ListItemText primary="New deaths:" secondary={ country.today_new_deaths } />
    </ListItem>
    <Divider light />
    <ListItem button>
    <ListItemText primary=" New recovered:" secondary={ country.today_new_recovered } />
    </ListItem>
    <ListItem button>
    <ListItemText primary=" Open Cases:" secondary={ country.today_open_cases } />
    </ListItem>
  </List>
  );
}
export default Details;