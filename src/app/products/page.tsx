import React from 'react'
import { AllProducts } from '@src/features/products'
import { products } from '@mocks/products';
import { Hero } from '@src/components/Hero/Hero';

const  ProductsPage= () => {
    return (
        <>
            <Hero
                heading='Best and Quality Products'
                description='Affordability, Durability, Fast and Convenient, Free shipping and more'
                imageUrl='./img/bags.jpg'
                bntLabel='View All Categories'
                bntLink='/categories'
            />

           

            <AllProducts products={products} />
        </>
    )
};

export default ProductsPage;