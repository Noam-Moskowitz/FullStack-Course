import React, { useEffect, useState } from 'react'
import { PRODUCTS, Product } from '../../models/Product'
import NewProduct from './NewProduct';
import './productList.css'
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';


const ProductList = () => {

    const UI_STATE = {
        NONE: `NONE`,
        CREATE: `CREATE`,
        EDIT: `EDIT`,
        VIEW: `VIEW`
    }

    const [products, setProducts] = useState(PRODUCTS);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [uiState, setUiState] = useState(UI_STATE.NONE)


    const updateList = (newProduct) => {
        const newList = [...products, newProduct];
        setProducts(newList)
        updateUiState()
    }

    const updateUiState = () => {
        setUiState(UI_STATE.NONE)
    }

    const editProduct = (editedProduct) => {
        const i = products.indexOf(selectedProduct);
        const newProductsArr = [...products]
        newProductsArr[i] = editedProduct;
        setProducts(newProductsArr);
        updateUiState()
    }



    return (
        <div>
            <h2>Product List</h2>
            <div className='product-list-container'>
                <div>
                    <button onClick={() => setUiState(UI_STATE.CREATE)}>Add New Product</button>

                    <table>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.pName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => { setSelectedProduct(product); setUiState(UI_STATE.VIEW) }}>Show</button>
                                        <button onClick={() => { setSelectedProduct(product); setUiState(UI_STATE.EDIT) }}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    {uiState === UI_STATE.CREATE && <NewProduct callback={updateList} />}
                    {uiState === UI_STATE.VIEW && <ProductView callback={updateUiState} product={selectedProduct} />}
                    {uiState === UI_STATE.EDIT && <ProductEdit selectedProduct={selectedProduct} callback={editProduct} />}
                </div>

            </div>
        </div>
    )
}

export default ProductList
