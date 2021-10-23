import * as React from 'react';
import './dialog.styles.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from '../../components/button/button.component';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import UploadButtons from '../../components/upload/upload.component';

export default function Dialogbox(category) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <CustomButton type = "button" onClick={handleClickOpen}>
          ADD PRODUCT
      </CustomButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Product Category
        </DialogContentText>
        <Select className="selectcat"
            labelId="demo-simple-select-label"
            id="demo-simple-select">
            <MenuItem value="Select">SELECT</MenuItem>
            <MenuItem value="electronics">ELECTRONICS</MenuItem>
            <MenuItem value="jewelery">JEWELERY</MenuItem>
            <MenuItem value="men's clothing">MEN'S CLOTHING</MenuItem>
            <MenuItem value="women's clothing">WOMEN'S CLOTHING</MenuItem>
        </Select>
          <TextField placeholder = "Enter Product Titile" autoFocus margin="dense" id="name"  label="Product Title"  type="text"  fullWidth variant="standard"/>
          <TextField placeholder = "Price $"
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="numeric"
            fullWidth
            variant="standard"
          />
        <DialogContentText>
            Top Products
          </DialogContentText>
          <DialogContentText>
            Upload Product Image
          </DialogContentText>
            <UploadButtons/>
        </DialogContent>
        <Divider/>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
