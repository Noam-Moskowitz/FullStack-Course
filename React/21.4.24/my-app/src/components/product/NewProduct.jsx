import React, { useEffect } from 'react'
import './newProduct.css'
import useProductForm from '../../hooks/useProductForm';


const NewProduct = (props) => {

    const [product, errors, handleChange, handleSubmit]= useProductForm(props.callback)



    return (
        <div>
            <h1>Add New Product</h1>
            <form className='product-form' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='title'>Product Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='title'
                                    name='title'
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
