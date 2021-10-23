import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import RangeSlider from '../../components/slider/slider.component';
import './category.styles.scss';

export default function Category(props) {
    console.log(props);
    var _data = props.category;
    return (
    <Box sx={{ width: '50%', maxWidth: 240, bgcolor: 'background.paper' }}>
    <h3 className = "heading"> CATEGORIES</h3>
    <Divider className = "divider"/>
      <nav aria-label="main mailbox folders">
      {_data.map((topic,id) => (
        <List key={id} topic={topic} >
          <ListItem disablePadding>
            <ListItemButton>
        <ListItemText className = "topics">{topic}</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    ))
}

   </nav>
      <Divider className = "divider"/>
      <RangeSlider/>
    </Box>
  );
}
