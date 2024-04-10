import React from 'react'
import ProductNewOneField from './ProductNewOneField'
import ProductNewObject from './ProductNewObject'
import ProductNewClassInstance from './ProductNewClassInstance'

const FormsMain = () => {
  return (
    <div>
      <ProductNewOneField/>
      <hr style={{marginTop:'25px'}} />
      <h2>Project New - Object</h2>
      <ProductNewObject/>
      <ProductNewClassInstance/>
    </div>
  )
}

export default FormsMain
