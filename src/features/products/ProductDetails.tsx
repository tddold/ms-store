
'use client'
import {
    Box,
    Button,
    Link as ChakraLink,
    Divider,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react';
import { AddToCartButton } from '@src/components/AddToCartButton';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb';
import { Quantity } from '@src/components/Quantity';
import { Rating } from '@src/components/Rating';
import { defaultBreadcrumbItems, getSubstring } from '@src/helpers';
import { IProduct } from '@src/model';
import Link from 'next/link';

interface IProductDetailsProps {
    product: IProduct;
}

export const ProductDetails = ({ product }: IProductDetailsProps) => {
    return (
        <>
            <CustomBreadcrumb
                items={[
                    ...defaultBreadcrumbItems,
                    {
                        name: product.category!.name,
                        link: `/categories/${product.category?.id}`
                    },
                    {
                        name: getSubstring(product.name, 20),
                        link: `/products/${product.slug}`
                    },
                ]}
            />
            <Grid
                templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
                w={{ base: '100%', lg: '90%' }}
                mx={'auto'}
                p={'2rem'}
                gap={'20'}
            >
                <GridItem p={'1rem'}>
                    <Image
                        src={product.mainImage}
                        alt={product.name}
                        mx={'auto'}
                    />
                </GridItem>

                <GridItem p={'1rem'}>
                    <Heading>{product.name}</Heading>
                    <Text my={'1rem'}>{product.description}</Text>
                    <Rating rating={product.rating} />

                    <Text
                        fontWeight={'bold'}
                        fontSize={'2rem'}
                    >
                        {product.price}
                    </Text>
                    <Divider my={'1rem'} />
                    <Quantity />
                    <Divider my={'1rem'} />

                    <Box>
                        <Link href={'/checkout'}>
                            <Button
                                variant={'outline'}
                                bgColor={'brand.primary'}
                                color={'white'}
                                borderRadius={'50px'}
                                size={'sm'}
                                w={'160px'}
                                mr={'1rem'}
                                my={'0.5rem'}
                                _hover={{ bgColor: 'none' }}
                            >
                                Buy Now
                            </Button>
                        </Link>
                        <AddToCartButton />
                    </Box>

                    <Stack py={'2rem'}>
                        <Box borderWidth={1} borderColor={'gray.100'} p={'1rem'}>
                            <Text fontWeight={'bold'}>Free Delivery</Text>
                            <ChakraLink textDecor={'underline'} color={'gray.500'}>
                                Enter Your postal Code for Delivery Availability
                            </ChakraLink>
                        </Box>

                        <Box borderWidth={1} borderColor={'gray.100'} p={'1rem'}>
                            <Text fontWeight={'bold'}>Return Delivery</Text>
                            <Text color={'gray.500'}>
                                Free 30 Days Delivery Returns
                            </Text>
                            <ChakraLink textDecor={'underline'} color={'gray.500'}>
                                Details
                            </ChakraLink>
                        </Box>
                    </Stack>
                </GridItem>
            </Grid>
        </>
    )
}
