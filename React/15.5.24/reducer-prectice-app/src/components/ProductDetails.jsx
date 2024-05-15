import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetails = () => {

    const { product_id } = useParams();

    


    return (
        <div>
            Product Details - {product_id}
        </div>
    )
}

export default ProductDetails
