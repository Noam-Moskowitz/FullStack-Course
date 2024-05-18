import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {

    const [newProduct, setNewProduct]=useState({title:null, price:null});
    const [errors, setErrors] =useState([]);
    const [postError, setPostError] = useState()
    const [isLoading, setIsLoading]= useState(false);
    const [didCreate, setDidCreate]= useState(false)
    
    const navigateTo = useNavigate()


    const callApi=async()=>{
        try {
            setIsLoading(true);
            const response = await axios.post(`https://api.escuelajs.co/api/v1/products/`, {
                title:newProduct.title,
                price:newProduct.price,
                description:`lalala`,
                categoryId:1,
                images:[`www.itsnanimage.com`]
            });
            setDidCreate(true)
            setTimeout(()=>{
            setDidCreate(false)
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
        if (!newProduct.title) {
            formError[`title`]=`Product must have a title!`
        }
        if (!newProduct.price) {
            formError[`price`]=`Product must have a price!`
        }
        setErrors(formError)

        if (!formError[`title`] && !formError[`price`]) {
            callApi()
        }

    }


    if (isLoading) return (<div className='text-center text-3xl'>Adding Product..</div>)
    if (postError) return (<div className='text-center text-3xl'>{postError.message}</div>)
    if (didCreate) return (<div className='text-center text-3xl'>Product Created Succesfully!</div>)

    return (
        <div className='flex flex-col justify-center items-center p-18'>
            <h1 className='py-10 text-4xl'>Add A New Product</h1>
            <form action="" className='flex flex-col w-1/6' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Title..' 
                    className='inpt mt-4'
                    onChange={(e)=>setNewProduct({...newProduct, title:e.target.value})}
                />
                <div className='text-red-500'>
                    {errors[`title`] && errors[`title`]}
                </div>
                <input 
                    type="number" 
                    placeholder='Price..'
                    className='inpt mt-4'
                    onChange={(e)=>setNewProduct({...newProduct, price:e.target.value})}
                />
                <div className='text-red-500'>
                    {errors[`price`] && errors[`price`]}
                </div>
                <button className='btn hover:bg-blue-100 mt-4'>Submit</button>
            </form>
        </div>
    )
}

export default NewProduct
