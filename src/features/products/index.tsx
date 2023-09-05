'use client'

import { Flex } from '@chakra-ui/react'
import { ProductCard } from '@src/components/ProductCard';
import { IProduct } from '@src/model'
import React from 'react'

interface IAllProductsProps {
    products: IProduct[];
}

export const AllProducts = ({ products }: IAllProductsProps) => {
    return (
        <>
            <Flex
                flexWrap={'wrap'}
                w={{ base: '100%', lg: '90%' }}
                mx={'auto'}
                justify={{ base: 'center', lg: 'space-between' }}
            >

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </Flex>
        </>
    )
}
