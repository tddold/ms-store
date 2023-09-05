import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { cartSectionStyles, desktopNavStyles, logoSectionStyles } from './style'
import { AppLogo } from '../AppLogo'
import { navItems } from '@src/helpers'
import Link from 'next/link'
import { Search } from '../Search/Search'
import { Wishlist } from '../Wishlist/Wishlist'
import { Cart } from '../Cart/Cart'

export const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
        <Stack {...logoSectionStyles}>
            <Box><AppLogo/></Box>
            
                {navItems.map((navItem) => (
                    <Box key={navItem.label}>
                        <Link href={navItem.href}>{navItem.label}</Link>
                    </Box>
                ))}
            
            <Box><Search/></Box>
        </Stack>

        <Stack {...cartSectionStyles}>
            <Box><Wishlist/></Box>
            <Box><Cart/></Box>
        </Stack>
    </Flex>
  )
}
