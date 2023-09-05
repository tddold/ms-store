import { Box, IconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwiper } from 'swiper/react'

const bntStiles: IconButtonProps = {
    rounded: 'lg',
    borderColor: 'brand.primary',
    borderWidth: '1px',
    color: 'brand.primaryDark',
    bgColor: 'white',
    mx: '1px',
    'aria-label': ''
};

export const SwiperNavButton = () => {
    const swiper = useSwiper();

    return (
        <Box m='1.5rem'>
            <IconButton
                {...bntStiles}
                icon={<FaChevronLeft />}
                aria-label='Prew'
                onClick={() => swiper.slidePrev()}
            />
            <IconButton
             {...bntStiles}
                icon={<FaChevronRight />}
                aria-label='Next'
                onClick={() => swiper.slideNext()}
            />
        </Box>
    )
}
