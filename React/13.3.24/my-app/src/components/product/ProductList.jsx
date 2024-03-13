import React, { useState } from 'react'
import { PRODUCTS, Product } from '../../models/Product'

const ProductList = () => {
const [products,setProducts]=useState(PRODUCTS);

const handleShowDetails=(product)=>{
alert(`Product ID: ${product.id}.
Product Name: ${product.name}`)
}

    return (
    <div>
        <h3>Product List</h3>
        <table>
            <tbody>
                {products.map(product=> (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={()=>handleShowDetails(product) }>Show Details</button>
                        </td>
                    </tr>
                ) )}
            </tbody>
        </table>

    </div>
)
}

export default ProductList
