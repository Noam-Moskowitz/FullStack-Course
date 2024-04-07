import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductListApi = () => {
    const [products, setProducts]= useState([]);
    const [error, setError]= useState(``);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(()=>{
        const fetchProducts= async()=>{
            try {
                setIsLoading(true)
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(response.data)
            } catch (err) {
                setError(err.message)
            } finally{
                setIsLoading(false)
            }
        
        };

        fetchProducts()
    },[])

    if (isLoading) return <div>Loading..</div>
        
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <table>
                        <thead>
                            <tr className='bg-info '>
                                <td className='p-2'>ID</td>
                                <td className='p-2'>Title</td>
                                <td className='p-2'>Price</td>
                                <td className='p-2'>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td className='p-2'>{product.id}</td>
                                    <td className='p-2'>{product.title}</td>
                                    <td className='p-2'>{product.price}</td>
                                    <td className='p-2'> 
                                        <img style={{width:"100px"}} src={product.image} alt='product'/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
    )
}

export default ProductListApi
