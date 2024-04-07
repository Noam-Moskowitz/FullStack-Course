import { useState, useEffect } from "react";
import { Product } from "../models/Product";

const useProductForm=( callback, selectedProduct)=>{
    const [isCreateMode]= useState(selectedProduct?false:true)
    const [product, setProduct] = useState(!selectedProduct?new Product(): selectedProduct);
    const [errors, setErrors] = useState(null);

    const handleChange = (e) => {

        const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
        currProduct.updateField(e.target.name, e.target.value)

        setProduct(currProduct);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const loaclErrors = product.validate();
        if (Object.keys(loaclErrors).length === 0) {
            if (isCreateMode) {

            const currProduct = new Product(product.id, product.pName, product.price, product.quantity);
            currProduct.generateUID()
            callback(currProduct)
            }else{
                callback(product)
            }
        } else {
            setErrors(loaclErrors)
        }

    }

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