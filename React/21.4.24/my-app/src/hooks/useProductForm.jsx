import { useState, useEffect, useContext } from "react";
import { Product } from "../models/Product";
import useApi, { METHOD } from "./useApi";
import APIContext from "../Contexts/APIContext";

const useProductForm = (callback, selectedProduct) => {

    const URL = useContext(APIContext)

    const [isCreateMode] = useState(selectedProduct ? false : true)
    const [product, setProduct] = useState(!selectedProduct ? new Product() : selectedProduct);
    const [errors, setErrors] = useState(null);

    const { response, callAPI, method } = useApi();

    const handleChange = (e) => {
        const currProduct = new Product(product.id, product.title, product.price, product.quantity);
        currProduct.updateField(e.target.name, e.target.value)

        setProduct(currProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const loaclErrors = product.validate();
        if (Object.keys(loaclErrors).length === 0) {
            if (isCreateMode) {

                const currProduct = new Product(product.id, product.title, product.price, product.quantity);
                delete currProduct.id;

                callAPI(URL, METHOD.CREATE, currProduct)
            } else {
                callAPI(URL, METHOD.UPDATE, product)
            }
        } else {
            setErrors(loaclErrors)
        }

    }


    useEffect(() => {
        if (!isCreateMode) {
            callAPI(`https://fakestoreapi.com/products/`, METHOD.GET_ONE, product)
        }
    }, [])

    useEffect(() => {
        if (response) {
            const newProduct = new Product(response.id, response.title, response.price, response.quantity);
            if (method === METHOD.UPDATE || method === METHOD.CREATE) {
                callback(newProduct)
            } else {
                setProduct(newProduct)
            }
        }
    }, [response])

    useEffect(() => {
        if (errors) {
            console.log(errors)
        }
    }, [errors])



    useEffect(() => {
        if (selectedProduct) setProduct(selectedProduct);
    }, [selectedProduct])

    return [product, errors, handleChange, handleSubmit]

}

export default useProductForm