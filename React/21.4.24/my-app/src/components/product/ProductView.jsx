import React, { useEffect } from 'react'
import useApi, { METHOD } from '../../hooks/useApi'

function ProductView({ product, callback }) {

    const {response, error, isLoading, callAPI} = useApi();

    useEffect(() => {
        callAPI(`https://fakestoreapi.com/products/`, METHOD.GET_ONE, { id: product.id })
    }, [])

    if (isLoading) return <div>Loading..</div>
    if (error) return <div>{error}</div>

    if (response) return (
        <div>
            <h1>View Product</h1>
            <table className='product-view-form'>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{response.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{response.title}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>{response.price}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={() => callback()}>Close</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductView
