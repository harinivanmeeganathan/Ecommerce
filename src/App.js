import './App.css';
import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import Header from './components/header/header.component';
import Category from './components/category/category.component';
import PaginationComp from './components/pagination/page.component';

class App extends Component{
  constructor(props){
    super();
  
  this.state = {
    products: [],
    category : []
    };  
}

componentDidMount(){
  Promise.all([
    fetch('https://fakestoreapi.com/products'),
    fetch('https://fakestoreapi.com/products/categories')
])
.then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
.then(([users, categories]) => this.setState({
    products: users, 
    category: categories
}))
}

render() {
  const {products,category} = this.state;
  return (
    <div className='App'>
        <Header category = {category}/>
      <div className = "content">
      <Category category = {category}/>
      <CardList products = {products} className="cards"/>
      </div>
      <PaginationComp  products={this.state.products}/>     
    </div>
  );}
}

export default App;
