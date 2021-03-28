import React, { Component } from 'react'
import produclist from './productlist'
import { Container } from 'react-bootstrap'
import Filters from './filter'
import {Row,Card} from 'react-bootstrap'
export default class App extends Component {



state = {
data: [],
minPrice: 0,
maxPrice: 18000,
selectedCategories: [],
}

componentDidMount = () => {
this.setState({
  data: produclist
})
}

minPriceChange = (val) => {
this.setState({
  minPrice: val
})
}
maxPriceChange = (val) => {
this.setState({
  maxPrice: val
})
}

getCategoriesList = () => {
const result = [];
this.state.data.forEach(item => {
  if(!result.includes(item.category))
    result.push(item.category)
})

return result;
}

onCategoryClick = (category) => {
console.log(category)
this.setState(prevState => {
  const isPresent = prevState.selectedCategories.includes(category);
  let result = [];
  if(isPresent) {
    result = prevState.selectedCategories.filter(item => item !== category);
  } else {
    result = prevState.selectedCategories.concat(category)
  }

  return {
    selectedCategories: result
  }
})
}
  render() {
    return (
      <Container>

      <Filters minPrice={this.state.minPrice} maxPrice={this.state.maxPrice} 
      data={this.getCategoriesList()}
      selectedCategories={this.state.selectedCategories}
      onMinPriceChange={this.minPriceChange}
      onMaxPriceChange={this.maxPriceChange}
      val = {this.onCategoryClick}
      />
       <Row>

       {
         !this.state.selectedCategories.length ? 
         this.state.data.filter((item => this.state.minPrice && this.state.maxPrice ? 
         item.price >= this.state.minPrice && 
         item.price <= this.state.maxPrice : true))
         .map((item,index)=> {
           return <Card key={index} category={item.category} title={item.title} price = {item.price} image = {item.image} />;
         }) :
         this.state.data.filter((item => this.state.selectedCategories.length ?
         item.price >= this.state.minPrice && 
         item.price <= this.state.maxPrice && 
         this.state.selectedCategories.includes(item.category) : true))
         .map((item,index)=> {
           return <Card key={index} category={item.category} title={item.title} price = {item.price} image = {item.image} />;
         }) 
         }
 
       </Row>
    
     
    </Container>
    )
  }
}
