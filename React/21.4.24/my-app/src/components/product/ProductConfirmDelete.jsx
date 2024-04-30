import React, { useEffect, useContext } from 'react'
import './productDelete.css'
import useApi, { METHOD } from '../../hooks/useApi'
import APIContext from '../../Contexts/APIContext'

const ProductConfirmDelete = ({ selectedProduct, callbackReject, callbackConfirm }) => {

    const URL = useContext(APIContext)
    const { response, callAPI } = useApi();

    useEffect(() => {
        if (response) {
            callbackConfirm(selectedProduct)
        }

    }, [response])


    return (
        <div>
            <h3>Are You Sure You Want To Delete This?</h3>
            <table className='confirm-table'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='product-display'>
                        <td>{selectedProduct.id}</td>
                        <td>{selectedProduct.title}</td>
                        <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                        <td
                            onClick={() => {
                                callAPI(URL, METHOD.DELETE, { id: selectedProduct.id });
                            }}
                            colSpan={2}>
                            <button>Yes</button>
                        </td>
                        <td onClick={() => callbackReject()} colSpan={2}><button>No</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ProductConfirmDelete
