import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './page.styles.scss';

class PaginationComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      multiplierPerPage: 9
    };
       this.handleClick = this.handleClick.bind(this);
    console.log("value",props.products)
      }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const {  currentPage, multiplierPerPage } = this.state;
    const productarray = this.props.products;
    console.log("valuecheck",productarray)
    const indexOfLast = (currentPage * multiplierPerPage) - 1;
    const indexOfFirst = indexOfLast - multiplierPerPage;
    const currentValue = productarray.slice(indexOfFirst, indexOfLast);

    // const renderTodos = currentValue.map((prd, index) => {
    //   return <li key={index}>{prd}</li>;
    // });
    
    return (
      <Stack spacing={2} className = "page">
      <Pagination count={3} color="primary" currentValue={currentValue}/>
    </Stack>
    );
  }
}

export default PaginationComp;