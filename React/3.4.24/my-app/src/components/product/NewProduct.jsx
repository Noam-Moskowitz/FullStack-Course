import React, { useEffect, useState } from 'react'
import { Product } from '../../models/Product';
import './newProduct.css'


const NewProduct = (props) => {

    const [product, setProduct] = useState(new Product());
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const loaclErrors = product.validate();
        if (Object.keys(loaclErrors).length === 0) {
            const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
            currProduct.generateUID()
            setProduct(currProduct);

        } else {
            setErrors(loaclErrors)
        }

    }



    useEffect(() => {
        if (errors) {
            console.log(errors)
        }
    }, [errors])

    useEffect(() => {
        if (product.id) {
            props.callback(product)
        }
    }, [product.id])



    const handleChange = (e) => {

        const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
        currProduct.updateField(e.target.name, e.target.value)

        setProduct(currProduct);
    }

    return (
        <div>
            <h1>Add New Product</h1>
            <form className='product-form' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='pName'>Product Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='pName'
                                    name='pName'
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['name']}
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='price'>Price:</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='price'
                                    name='price'
                                    min={0}
                                    onChange={handleChange}
                                />
                            </td>
                            {errors && errors['price']}
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='quantity'>Quantity:</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id='quantity'
                                    name='quantity'
                                    min={0}
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

export default NewProduct
