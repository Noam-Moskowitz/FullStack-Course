import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const {product_id}= useParams()

    const [product, setProduct]=useState({});
    const [errors, setErrors] =useState([]);
    const [postError, setPostError] = useState()
    const [isLoading, setIsLoading]= useState(false);
    const [didUpdate, setdidUpdate]= useState(false)
    
    const navigateTo = useNavigate()


    const callApi=async(id)=>{
        try {
            setIsLoading(true);
            const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, {
                title:product.title,
                price:product.price,
                description:`lalala`,
                categoryId:1,
                images:[`www.itsnanimage.com`]
            });
            setdidUpdate(true)
            setTimeout(()=>{
            setdidUpdate(false)
            navigateTo(`/`)
            },2000)
        } catch (error) {
            setPostError(error)
        } finally{
            setIsLoading(false)
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const formError =[];
        if (!product.title) {
            formError[`title`]=`Product must have a title!`
        }
        if (!product.price) {
            formError[`price`]=`Product must have a price!`
        }
        setErrors(formError)

        if (!formError[`title`] && !formError[`price`]) {
            callApi(product.id)
        }
    }

    const fetchProduct = async(id)=>{
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            setPostError(error)
        }finally{
            setIsLoading(false)
        }

    }

    useEffect(()=>{
        fetchProduct(product_id)
    },[])


    if (isLoading) return (<div className='text-center text-3xl'>Adding Product..</div>)
    if (postError) return (<div className='text-center text-3xl'>{postError.message}</div>)
    if (didUpdate) return (<div className='text-center text-3xl'>Product updated Succesfully!</div>)

    return (
        <div className='flex flex-col justify-center items-center p-18'>
            <h1 className='py-10 text-4xl'>Add A New Product</h1>
            <form action="" className='flex flex-col w-1/6' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={product.title} 
                    className='inpt mt-4'
                    onChange={(e)=>setProduct({...product, title:e.target.value})}
                />
                <div className='text-red-500'>
                    {errors[`title`] && errors[`title`]}
                </div>
                <input 
                    type="number" 
                    value={product.price}
                    className='inpt mt-4'
                    onChange={(e)=>setProduct({...product, price:e.target.value})}
                />
                <div className='text-red-500'>
                    {errors[`price`] && errors[`price`]}
                </div>
                <button className='btn hover:bg-blue-100 mt-4'>Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct
