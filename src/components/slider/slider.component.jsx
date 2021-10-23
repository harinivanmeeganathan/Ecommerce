import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import CustomButton from '../../components/button/button.component';
import './slider.styles.scss';

function valuetext(value) {
  return `$.${value}`;
}

export default function RangeSlider() {
    var maxval =  100 ;
    var minval =  20 ;
    const [value, setValue] = React.useState([minval, maxval]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className = "slider">
<h3 className = "filter-title">FILTER BY PRICE</h3>      
    <Box sx={{ width: 200 }}>
    <Slider
        default = {20}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
    <div className = "filter-box">
    <CustomButton type = "button"> Filter </CustomButton>
    <h4 className = "price">Price ${minval} - ${maxval}</h4>
    </div>
    </div>
  );
}
