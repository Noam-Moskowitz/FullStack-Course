import React, { useEffect, useState } from 'react'
import axios from 'axios';
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

    const changeLink = (id)=>{

    }

    useEffect(()=>{
        fetchProducts()
    },[])

    if (isLoading) return (<div className='text-center text-3xl'>Loading...</div>)
    if (error) return (<div className='text-center text-3xl'>{error.message}</div>)
    if (!products) return (<div className='text-center text-3xl'>No Products Found!</div>)
        
        
    return (
        <div className='flex justify-center'>
            <div onMouseLeave={()=> setHoveredItem(null)} className='w-4/6 grid grid-cols-3 grid-rows-3 p-36 gap-8  '>
                {products.map(product=>(
                    <div
                        className=' flex flex-col justify-start items-center p-5 border-2 rounded  shadow-md hover:shadow-2xl ' 
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
                                    <button className='text-sm bg-gray-200 p-1 rounded hover:bg-gray-100 '>Edit</button>
                                    <button className='text-sm bg-gray-200 p-1 rounded hover:bg-gray-100 ml-2'>Delete</button>
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
