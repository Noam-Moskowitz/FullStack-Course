import React, { useEffect, useState, useReducer, useContext } from 'react'
import { PRODUCTS, Product } from '../../models/Product'
import NewProduct from './NewProduct';
import './productList.css'
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';
import ProductConfirmDelete from './ProductConfirmDelete';
import useApi, { METHOD } from '../../hooks/useApi';
import APIContext from '../../Contexts/APIContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductSlice';



const ProductList = () => {

    const URL = useContext(APIContext)
    /* const reduxStatus = useSelector(sate=> state.status) */
    const dispatchRedux=useDispatch()



    const UI_STATE = {
        NONE: `NONE`,
        CREATE: `CREATE`,
        EDIT: `EDIT`,
        VIEW: `VIEW`,
        DELETE: `DELETE`
    }

    const ACTION_TYPES = {
        PRODUCT_HOVERED: `PRODUCT_HOVERED`,
        PRODUCT_UNHOVERED: `PRODUCT_UNHOVERED`,
        PRODUCTS_RECEIVED: `PRODUCTS_RECEIVED`,
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
        selectedProduct: null,
        hoveredProduct: null,
        uiState: UI_STATE.NONE,
        products: []
    }

    const reducer = (state, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case ACTION_TYPES.PRODUCT_HOVERED:

                return { ...state, hoveredProduct: action.payload }
            case ACTION_TYPES.PRODUCT_UNHOVERED:

                return { ...state, hoveredProduct: null }

            case ACTION_TYPES.PRODUCTS_RECEIVED:

                return { ...state, products: action.payload }


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
    const { response, error, isLoading, callAPI } = useApi();

    useEffect(() => {
        /* dispatchRedux(fetchProducts()) */
        callAPI(URL, METHOD.GET_ALL)
    }, [])

    useEffect(() => {
        if (response) {

            dispatch({ type: ACTION_TYPES.PRODUCTS_RECEIVED, payload: response })
        }

    }, [response])

    /* if (reduxStatus===`loading`) return <div>Loading...</div> */
    if (isLoading) return <div>Loading..</div>
    if (error) return <div>Error: {error}</div>
    if (!state.products) return <div> No Results Found</div>


    return (
        <div>
            <h2>Product List</h2>
            <div className='product-list-container'>
                <div>
                    <button className='btn hover:font-bold transition-all ease-out duration-150' onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_CREATE, payload: null })}>Add New Product</button>

                    <table className='product-list-form' onMouseLeave={() => dispatch({ type: ACTION_TYPES.PRODUCT_UNHOVERED })} >
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody >
                            {state.products && state.products.map(product => (
                                <tr key={product.id}
                                    className={state.hoveredProduct && state.hoveredProduct.id === product.id ? `hoveredProduct` : ``}
                                    onMouseEnter={() => dispatch({ type: ACTION_TYPES.PRODUCT_HOVERED, payload: product })}
                                    onClick={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEW, payload: product })}
                                >
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {state.hoveredProduct && state.hoveredProduct.id === product.id && (
                                            <div>
                                                <button onClick={(e) => {
                                                    e.stopPropagation()
                                                    dispatch({ type: ACTION_TYPES.PRODUCT_EDIT, payload: product })
                                                }}
                                                    className='btn hover:font-bold transition-all ease-out duration-150'
                                                >Edit</  button>
                                                <button onClick={(e) => {
                                                    e.stopPropagation()
                                                    dispatch({ type: ACTION_TYPES.PRODUCT_DELETE, payload: product })
                                                }}
                                                    className='btn hover:font-bold transition-all ease-out duration-150'
                                                >Delete</button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {state.uiState !== UI_STATE.NONE && <div className='absolute top-52 right-52 bg-blue-200 p-8 rounded-lg border-4 border-black'>
                    {state.uiState === UI_STATE.CREATE && <NewProduct callback={
                        (product) => dispatch({ type: ACTION_TYPES.PRODUCT_CREATED, payload: product })} />}

                    {state.uiState === UI_STATE.VIEW && <ProductView callback={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEWED })} product={state.selectedProduct} />}

                    {state.uiState === UI_STATE.EDIT && <ProductEdit selectedProduct={state.selectedProduct} callback={
                        (product) => { console.log(product); dispatch({ type: ACTION_TYPES.PRODUCT_EDITED, payload: product }) }} />}

                    {state.uiState === UI_STATE.DELETE && <ProductConfirmDelete
                        callbackReject={() => dispatch({ type: ACTION_TYPES.PRODUCT_VIEWED })}
                        callbackConfirm={(product) => dispatch({ type: ACTION_TYPES.PRODUCT_DELETED, payload: product })}
                        selectedProduct={state.selectedProduct} />}

                </div>

                }

            </div>
        </div>
    )
}

export default ProductList
