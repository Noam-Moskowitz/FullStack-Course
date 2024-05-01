import React, { useState } from 'react'

const ProductNewObject = () => {

    const [product, setProduct]=useState({
        name:``,
        price:0,
        amount:0
    });


    const handleSubmit=(e)=>{

    }

    const handleChange=(e)=>{
        const key=e.target.name;
        const value = e.target.value;

        setProduct({
            ...product, 
            [key]:value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor='productName'>Product Name</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
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
                                    type="text"
                                    id='price'
                                    name='price'
                                    onChange={handleChange}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor='amount'>Amount</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id='amount'
                                    name='amount'
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

export default ProductNewObject
