import './Home.css';
import React, { Component } from 'react';
import ProductList from './product/ProductList';
import PageHeader from './PageHeader';



class Home extends Component {
    state = {}
    render() {
        return (
            <div className='home'>
                <ProductList />
                <PageHeader />


            </div>
        );
    }
}

export default Home;