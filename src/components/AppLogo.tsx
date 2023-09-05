import React from 'react'
import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export const AppLogo = () => {
    return (
        <Link href={'./'}>
        <Text color="gray.800" fontStyle="bold">
            MS{' '}
            <Text as="span" color="brand.primary">
                Store
            </Text>
        </Text>
        </Link>
    )
}
