import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './sorting.styles.scss';

export default function Sort() {
  const [sortModel, setSortModel] = React.useState([
    {
      sort: 'asc',
    },
  ]);
  
  return (
    <Box sx={{ maxWidth: 150 }} className="sort"> 
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sortingOrder={['desc', 'asc']}
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
        >
          <MenuItem value={30}>Default</MenuItem>
          <MenuItem value={10}>Low to High</MenuItem>
          <MenuItem value={20}>High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
