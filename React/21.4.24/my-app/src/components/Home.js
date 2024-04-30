import './Home.css';
import React, { Component } from 'react';
import ProductList from './product/ProductList';
import PageHeader from './PageHeader';
import APIContext from '../Contexts/APIContext';



class Home extends Component {
    state = {}
    render() {
        return (
            <div className='home'>
                <APIContext.Provider value='https://fakestoreapi.com/products/'>
                    <ProductList />
                </APIContext.Provider>

                <PageHeader />


            </div>
        );
    }
}

export default Home;