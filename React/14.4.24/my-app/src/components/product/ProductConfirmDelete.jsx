import React from 'react'
import './productDelete.css'

const ProductConfirmDelete = ({ selectedProduct, callbackReject, callbackConfirm }) => {
    return (
        <div>
            <h3>Are You Sure You Want To Delete This?</h3>
            <table className='confirm-table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='product-display'>
                        <td>{selectedProduct.id}</td>
                        <td>{selectedProduct.pName}</td>
                        <td>{selectedProduct.price}</td>
                        <td>{selectedProduct.quantity}</td>
                    </tr>
                    <tr>
                        <td onClick={() => callbackConfirm(selectedProduct)} colSpan={2}><button>Yes</button></td>
                        <td onClick={callbackReject} colSpan={2}><button>No</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ProductConfirmDelete
