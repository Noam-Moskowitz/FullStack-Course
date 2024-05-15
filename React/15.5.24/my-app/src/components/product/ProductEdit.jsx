import React, { useEffect, useState } from 'react'
import './newProduct.css'
import useProductForm from '../../hooks/useProductForm'

const ProductEdit = ({ selectedProduct, callback }) => {
    const [product, errors, handleChange, handleSubmit] = useProductForm(callback, selectedProduct)



    return (
        <div>
            <h1>Edit Product</h1>
            <form className='product-form' onSubmit={handleSubmit}>
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
                                    readOnly
                                    disabled
                                    value={product.id}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['id']}
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='title'>Product Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='title'
                                    name='title'
                                    value={product.title}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['name']}
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
                                    value={product.price}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['price']}
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                <input className='btn' type="submit" value="Submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductEdit
