import React, { useState } from 'react'
import { PRODUCTS, Product } from '../../models/Product'
import NewProduct from './NewProduct';
import './productList.css'


const ProductList = () => {
const [products,setProducts]=useState(PRODUCTS);
const [buttonClicked, setButtonCicked]= useState(false);

const handleShowDetails=(product)=>{
alert(`Product ID: ${product.id}.
Product Name: ${product.pName}`)
}

 const updateList = (newProduct)=>{
 const newList = [...products, newProduct];
 setProducts(newList)
 setButtonCicked(false)
 }


    return (
    <div>
        <h2>Product List</h2>
        <div className='product-list-container'>
            <div>
        <button onClick={()=>setButtonCicked(true)}>Add New Product</button>
                
                <table>
                    <tbody>
                        {products.map(product=> (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.pName}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={()=>handleShowDetails(product) }>Show Details</button>
                                </td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
            <div>
                { buttonClicked === true && <NewProduct callback={updateList} /> }
            </div>

        </div>
    </div>
)
}

export default ProductList
