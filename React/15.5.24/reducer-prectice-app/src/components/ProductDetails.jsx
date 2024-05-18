import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetails = () => {

    const { product_id } = useParams();

    const [isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState()
    const [product,setProduct] =useState()

        const fetchProduct=async(id)=>{
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
            setProduct(response.data)
        } catch (error) {
            console.log(error);
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchProduct(product_id)
    },[product_id])



    if (isLoading) return (<div className='text-center text-3xl'>Loading...</div>)
    if (error) return (<div className='text-center text-3xl'>{error.message}</div>)

    return (
        <div className='flex items-center justify-center p-16'>
            {product&&(
                <div className='shadow-md items-center border-2 rounded bg-gray-100 flex flex-col p-5'>
                    <img 
                        className='rounded h-96' 
                        src={product.images[0]} 
                        alt="" 
                    />
                    <div className='p-8 text-2xl'>{product.title}</div>
                    <div className='text-xl text-green-600 underline bg-green-300 rounded px-4 py-1'>{product.price}</div>
                </div>
            )} 
        </div>
    )
}

export default ProductDetails
