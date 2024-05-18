import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

const ProductGallery = () => {

    const [products, setProducts]=useState();
    const [hoveredItem, setHoveredItem]= useState()
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState()

    const fetchProducts=async()=>{
        try {
            setIsLoading(true)
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products`);
            setProducts(response.data)
        } catch (error) {
            console.log(error);
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }

    const removeItem = async(id)=>{
        try {
            const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
            const newProductList = products.filter(product=> product.id!==id)
            setProducts(newProductList);
        } catch (error) {
            setError(error)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    if (isLoading) return (<div className='text-center text-3xl'>Loading...</div>)
    if (error) return (<div className='text-center text-3xl'>{error.message}</div>)
    if (!products) return (<div className='text-center text-3xl'>No Products Found!</div>)
        
        
    return (
        <div className='flex justify-center'>
            <div>
                <Link to={`/new_product`}>
                    <button className='btn mt-2 hover:bg-blue-100'>
                        Add New Product
                    </button>
                </Link>
            </div>
            <div onMouseLeave={()=> setHoveredItem(null)} className='w-4/6 grid grid-cols-3 grid-rows-3 p-36 gap-8  '>
                {products.map(product=>(
                    <div
                        className=' flex flex-col justify-start items-center p-5 border-2 rounded  shadow-md hover:shadow-2xl relative ' 
                        key={product.id}
                        onMouseEnter={()=>setHoveredItem(product)}
                    >
                        <Link to={`/products/${product.id}`}>
                            <img className='w-full rounded' src={product.images[0] && product.images[0]} alt="" />
                        </Link>
                        <div className='flex flex-col justify-around items-center'>
                            <p className='text-sm p-2 text-center'>
                                {product.title}
                            </p>
                            <p className='text-sm p-2 underline text-green-800 font-bold'>
                                ${product.price}
                            </p>
                            {hoveredItem===product && (
                                <div className=''>
                                    <Link to={`/update_product/${product.id}`}>
                                        <button className='text-md bg-blue-400 p-1 rounded-2xl uppercase px-2 hover:bg-blue-200  absolute top-0 left-0 m-2'>Edit</button>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>removeItem(product.id)}
                                        className='text-sm bg-red-400 p-1 rounded hover:bg-red-200 hover:cursor-pointer ml-2 absolute right-0 top-0 w-8 m-1.5'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery
