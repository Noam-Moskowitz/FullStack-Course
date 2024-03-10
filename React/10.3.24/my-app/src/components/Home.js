import './Home.css';
import React, { Component } from 'react';
import ProductList from './product/ProductList';
import Footer from './Footer';
import PageHeader from './PageHeader';



class Home extends Component {
    state = {}
    render() {
        return (
            <div className='home'>
                {this.props.text}
                <ProductList/>
                <PageHeader title='This is the new title sent through "props"'/>
                <Footer/>

            </div>
        );
    }
}

export default Home;