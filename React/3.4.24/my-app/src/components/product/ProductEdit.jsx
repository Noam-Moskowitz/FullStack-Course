import React, { useEffect, useState } from 'react'
import { Product } from '../../models/Product';
import './newProduct.css'

const ProductEdit = ({ selectedProduct, callback }) => {
    const [product, setProduct] = useState(selectedProduct);
    const [errors, setErrors] = useState(null);

    const handleChange = (e) => {

        const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
        currProduct.updateField(e.target.name, e.target.value)

        setProduct(currProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const loaclErrors = product.validate();
        if (Object.keys(loaclErrors).length === 0) {
            callback(product)
        } else {
            setErrors(loaclErrors)
        }

    }

    useEffect(() => {
        setProduct(selectedProduct);
    }, [selectedProduct])

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
                                <label htmlFor='pName'>Product Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='pName'
                                    name='pName'
                                    value={product.pName}
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
                            <td>
                                <label htmlFor='quantity'>Quantity</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='quantity'
                                    name='quantity'
                                    value={product.quantity}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['quantity']}
                        </tr>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default ProductEdit
