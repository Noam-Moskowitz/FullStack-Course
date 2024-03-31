import React from 'react'

function ProductView(props) {
    return (
        <div>
            <h1>View Product</h1>
            <table>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{props.product.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{props.product.pName}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{props.product.price}</td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <td>{props.product.quantity}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={() => props.callback()}>Close</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductView
