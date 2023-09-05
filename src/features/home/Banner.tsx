'use client'
import { 
    Box,
    Button,
    Flex,
    Heading,
    ResponsiveValue,
    Text 
} from '@chakra-ui/react'
import React from 'react'
import { 
    bannerBtnStyles,
    bannerHeadingStyles,
    bannerImageBoxStyles,
    bannerStyles,
    bannerTextStyles
} from './style'
import Link from 'next/link'

const resWidth: ResponsiveValue<string> = { base: '100%', lg: '50%'};

export const Banner = () => {
    return (
        <Flex {...bannerStyles}>
            <Box w={resWidth}>
                <Heading {...bannerHeadingStyles}>
                    Online Shopping <br /> Made Easy
                </Heading>
                <Text {...bannerTextStyles}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est   voluptate temporibus quaerat ut esse culpa saepe officia modi suscipit deserunt debitis a, sunt exercitationem magnam facere, possimus corporis praesentium! Veritatis?
                </Text>
                <Link href={'/products'}>
                    <Button {...bannerBtnStyles}>Show Now</Button>
                </Link>
            </Box>
            <Box w={resWidth}>
               <Box {...bannerImageBoxStyles}></Box>
            </Box>
        </Flex>
    )
}
