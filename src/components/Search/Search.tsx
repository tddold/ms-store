import { Box, Icon, Input, InputGroup, InputLeftElement, chakra } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon} from '@chakra-ui/icons'
import { searchInputStyles } from './style'

export const Search = () => {
    return (
        <Box>
            <InputGroup size={'sm'} w={{base: '100%', lg:'32rem'}}>
                <InputLeftElement pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children ={<SearchIcon color='gray.400' />}
                />
                <Input {...searchInputStyles}/>
            </InputGroup>
        </Box>
    )
}
