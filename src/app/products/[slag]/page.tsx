import { products } from '@mocks/products'
import { ProductDetails } from '@src/features/products/ProductDetails'
import React from 'react'

const ProductDetailsPage = () => {
  return (
    <>    
        <ProductDetails product={products[0]}/>
    </>
  )
}

export default ProductDetailsPage