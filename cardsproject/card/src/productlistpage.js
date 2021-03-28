import React, { Component } from 'react'
import productlist from './productlist'
import Card from './card';
import Filter from './filter'
export default class productlistpage extends Component {
    state = {
        data: []
    }
    
    componentDidMount() {
        this.setState({
            data: productlist,
            selectedCategories: [],
        })
    }
    
    render() {
        return (
            <div>
                <Filter />
                <div className="App">
                    {data.map((item, index) => {
                        return <Card key={data.id} title={item.title} description={item.description} image={item.image} variants={item.variants} />
                    })}
                </div>
            </div>
        )
    }
}






