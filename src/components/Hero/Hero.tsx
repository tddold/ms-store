'use client'

import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { heroCardStyles, heroImageStyles } from './style'
import Link from 'next/link';

interface IHeroProps {
    heading: string;
    description: string;
    imageUrl: string;
    bntLabel: string;
    bntLink: string;
}

export const Hero = ({ heading, description, imageUrl, bntLabel, bntLink }: IHeroProps) => {
    return (
        <Card {...heroCardStyles}>


            <Box mx='2rem' w={{ base: '100%', lg: '50%' }}>
                <Heading size={{ base: 'xl', bg: '2xl' }}>{heading}</Heading>
                <Text py={'1rem'} >{description}</Text>

                <Link href={bntLink}>
                    <Button variant={'outline'}>
                        {bntLabel}
                    </Button>
                </Link>
            </Box>

            <Box mx='2rem' w={{ base: '100%', lg: '50%' }} mt={'1rem'}>
                <Image src={imageUrl} alt={heading} {...heroImageStyles} />
            </Box >
        </Card>
    )
}
