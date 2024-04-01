import React, { useEffect, useState, useReducer } from 'react'
import { PRODUCTS, Product } from '../../models/Product'
import NewProduct from './NewProduct';
import './productList.css'
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';
import ProductConfirmDelete from './ProductConfirmDelete';


const ProductList = () => {

    const UI_STATE = {
        NONE: `NONE`,
        CREATE: `CREATE`,
        EDIT: `EDIT`,
        VIEW: `VIEW`,
        DELETE: `DELETE`
    }

    const ACTION_TYPES = {
        PRODUCT_CREATE: `PRODUCT_CREATE`,
        PRODUCT_CREATED: `PRODUCT_CREATED`,
        PRODUCT_EDIT: `PRODUCT_EDIT`,
        PRODUCT_EDITED: `PRODUCT_EDITED`,
        PRODUCT_VIEW: `PRODUCT_VIEW`,
        PRODUCT_VIEWED: `PRODUCT_VIEWED`,
        PRODUCT_DELETE: `PRODUCT_DELETE`,
        PRODUCT_DELETED: `PRODUCT_DELETED`
    }


    const initialState = {
        products: PRODUCTS,
        selectedProduct: null,
        uiState: UI_STATE.NONE
    }

    const reducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case ACTION_TYPES.PRODUCT_CREATE:
                return { ...state, uiState: UI_STATE.CREATE };

            case ACTION_TYPES.PRODUCT_CREATED:
                return {
                    ...state,
                    products: [...state.products, action.payload],
                    uiState: UI_STATE.NONE
                }
            case ACTION_TYPES.PRODUCT_VIEW:
                return {
                    ...state,
                    selectedProduct: action.payload,
                    uiState: UI_STATE.VIEW
                }
            case ACTION_TYPES.PRODUCT_VIEWED:
                return {
                    ...state,
                    uiState: UI_STATE.NONE
                }
            case ACTION_TYPES.PRODUCT_EDIT:
                return {
                    ...state,
                    uiState: UI_STATE.EDIT,
                    selectedProduct: action.payload
                }
            case ACTION_TYPES.PRODUCT_EDITED:
                return {
                    ...state,
                    uiState: UI_STATE.NONE,
                    products: state.products.map(p => p.id === action.payload.id ? action.payload : p)
                }
            case ACTION_TYPES.PRODUCT_DELETE:
                return {
                    ...state,
                    uiState: UI_STATE.DELETE,
                    selectedProduct: action.payload
                }
            case ACTION_TYPES.PRODUCT_DELETED:
                return {
                    ...state,
                    uiState: UI_STATE.NONE,
                    products: state.products.filter(p => p.id !== action.payload.id)
                }
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);





    return (
        <div>
            <h2>Product List</h2>
            <div className='product-list-container'>
                <div>
                    <button onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_CREATE, payload: null })}>Add New Product</button>

                    <table className='product-list-form'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {state.products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.pName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEW, payload: product })}>Show</button>
                                        <button onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_EDIT, payload: product })}>Edit</button>
                                        <button onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_DELETE, payload: product })}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    {state.uiState === UI_STATE.CREATE && <NewProduct callback={
                        (product) => dispatch({ type: ACTION_TYPES.PRODUCT_CREATED, payload: product })} />}
                    {state.uiState === UI_STATE.VIEW && <ProductView callback={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEWED })} product={state.selectedProduct} />}
                    {state.uiState === UI_STATE.EDIT && <ProductEdit selectedProduct={state.selectedProduct} callback={
                        (product) => { dispatch({ type: ACTION_TYPES.PRODUCT_EDITED, payload: product }) }} />}
                    {state.uiState === UI_STATE.DELETE && <ProductConfirmDelete
                        callbackReject={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEWED })}
                        callbackConfirm={(product) => dispatch({ type: ACTION_TYPES.PRODUCT_DELETED, payload: product })}
                        selectedProduct={state.selectedProduct} />}

                </div>

            </div>
        </div>
    )
}

export default ProductList
