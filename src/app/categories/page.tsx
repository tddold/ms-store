import { categories } from '@mocks/categories'
import { Hero } from '@src/components/Hero/Hero'
import { AllCategories } from '@src/features/categories'
import React from 'react'

const CategoriesPage = () => {
    return (
        <>
            <Hero
                heading='Product Categories'
                description="We've got all your favorite Categories "
                imageUrl='./img/store.png'
                bntLabel='View All Products'
                bntLink='/products'
            />

            <AllCategories categories={categories} />
        </>
    )
}

export default CategoriesPage