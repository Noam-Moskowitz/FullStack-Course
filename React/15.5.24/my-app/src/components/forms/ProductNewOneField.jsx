import React, { useState } from 'react'

const ProductNewOneField = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [amount,setAmount]=useState('');

const handleChange=(event)=>{
        setName(event.target.value)
    }

const handleSubmit=(event)=>{
    event.preventDefault()
    if (name && price && amount) console.log(name,price,amount);

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
                                    id='productName'
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
                                    onChange={(event)=>setPrice(event.target.value)}
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
                                    onChange={(event)=>setAmount(event.target.value)}
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

export default ProductNewOneField
