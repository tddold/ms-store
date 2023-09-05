import { products } from '@mocks/products'
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb'
import { Hero } from '@src/components/Hero/Hero'
import { AllProducts } from '@src/features/products'
import { defaultBreadcrumbItems } from '@src/helpers'
import React from 'react'

const CategoryPage = () => {
    return (
        <>
            <Hero
                heading={products[0].category!.name}
                description={`Best and Affordable ${products[0].category!.name}`}
                imageUrl={products[0].category!.image}
                bntLabel='View All Categories'
                bntLink='/categories'
            />

            <CustomBreadcrumb
                items={[
                    ...defaultBreadcrumbItems,
                    { name: products[0].category!.name, link: '#' }
                ]}
            />

            <AllProducts products={products} />
        </>
    )
}

export default CategoryPage