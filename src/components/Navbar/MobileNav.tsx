import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AppLogo } from '../AppLogo'
import { mobileNavContainerStyles, mobileSearchWrapperStyles } from './style'
import { Search } from '../Search/Search'
import { MobileNavMenu } from './MobileNavMenu'
import { Wishlist } from '../Wishlist/Wishlist'
import { Cart } from '../Cart/Cart'

export const MobileNav = () => {
  return (
    <>
      <Flex {...mobileNavContainerStyles}>
        <Box><MobileNavMenu/></Box>
        <AppLogo />
        <Stack direction={'row'} spacing={1}>
          <Text><Wishlist/></Text>
          <Text><Cart/></Text>
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapperStyles}>
        <Search/>
      </Box>
    </>
  )
}
