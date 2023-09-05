import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import { AddToCartButton } from './AddToCartButton'
import { Rating } from './Rating'
import { IProduct } from '@src/model';
import { getSubstring } from '@src/helpers';
import { AddToWishlistButton } from './AddToWishlistButton';

interface IProductCardProps {
    product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {
    return (
        <Card w={'xs'} pos={'relative'} m={'0.5rem'}>
            <AddToWishlistButton product={product}/>
            <CardBody>
                <Box
                    boxSize={'200px'}
                    bg={`center / contain no-repeat url(${product.mainImage})`}
                    mx={'auto'}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Flex justify='space-between' align='center'>
                        <Heading size='sm'>{getSubstring(product.name, 20)}</Heading>
                        <Flex color='brand.primaryDark' fontWeight='bold'>
                            <Text fontSize='sm'>$</Text>
                            <Text fontSize='lg'>{product.price}</Text>
                        </Flex>
                    </Flex>
                    <Text>{getSubstring(product.description, 30)}</Text>
                    <Rating rating={product.rating} />
                    <AddToCartButton product={product} />
                </Stack>
            </CardBody>
        </Card>
    )
}
