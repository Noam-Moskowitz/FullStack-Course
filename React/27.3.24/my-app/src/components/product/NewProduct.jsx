import React, { useEffect, useState } from 'react'
import { Product } from '../../models/Product';


const NewProduct = (props) => {

    const [product, setProduct]=useState(new Product());
    const [errors, setErrors]=useState(null);

        const handleSubmit=(e)=>{
        e.preventDefault()
        if (validateForm()) {
            props.callback(product)
        }else{
            /* console.log(`Failure`); */
        }
        
    }

    const validateForm=()=>{
        const formErrors={};
        let formIsValid=true;

        if (!product.id) {
            formIsValid=false;
            formErrors['id']='Product Id must be defined.'
        }

        if (!product.pName) {
            formIsValid=false;
            formErrors['name']='Product Name must be defined.'
        }

        if (!product.price) {
            formIsValid=false;
            formErrors['price']='Product Price must be defined.'
        } else{
            if (product.price<=0 || product.price>=10_000) {
                formIsValid=false;
                formErrors['price']='Price must be between 1 and 9,999.'
            }
        }
        if (!product.quantity) {
            formIsValid=false;
            formErrors['quantity']='Product Quantity must be defined.'
        } else{
            if (product.quantity<=0 || product.quantity>=10_000) {
                formIsValid=false;
                formErrors['quantity']='Quantity must be between 1 and 9,999.'
            }
        }

        setErrors(formErrors)
        return formIsValid;
    }

useEffect(()=>{
    if (errors) {
    console.log(errors)
    }
},[errors])



    const handleChange=(e)=>{

        const currProduct=new Product(product.id, product.pName, product.price, product.quantity);
        currProduct.updateField(e.target.name,e.target.value)

        setProduct(currProduct);
    }

    return (
        <div>
            <h1>Add New Product</h1>
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
                                    min={0}
                                    onChange={handleChange}
                                    />
                            </td>
                            { errors && errors['id']}
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
                            { errors && errors['name']}
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
                            { errors && errors['price']}
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
                            { errors &&  errors['quantity']}
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

export default NewProduct
