import React, { useState } from 'react'
import { Product } from '../../models/Product';


const ProductNewClassInstance = () => {

    const [product, setProduct]=useState(new Product());


    const handleSubmit=(e)=>{
    e.preventDefault()
    }

    const handleChange=(e)=>{

        const currProduct=new Product(product.id, product.pName, product.price, product.quantity);
        currProduct.updateField(e.target.name,e.target.value)

        setProduct(currProduct);
    }

    return (
        <div>
            <h1>Product - New Class Instance</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='id'>ID</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='id'
                                    name='id'
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='pName'>Product Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='pName'
                                    name='pName'
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='price'>Price</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='price'
                                    name='price'
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='quantity'>Quantity</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='quantity'
                                    name='quantity'
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign:'right'}}>
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductNewClassInstance
