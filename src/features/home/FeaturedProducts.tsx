'use client'

import { Box } from '@chakra-ui/react';
import { ProductCard } from '@src/components/ProductCard';
import { SectionHeading } from '@src/components/SectionHeading';
import { SwiperNavButton } from '@src/components/SwiperNavButton';
import { IProduct } from '@src/model';
import { CSSProperties } from 'react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

const slideStyles: CSSProperties = {
  boxSizing: 'border-box',
  maxWidth: '350px'
}

interface FeaturedProductsProps {
  title: string;
  products: IProduct[];
}

export const FeaturedProducts = ({ title, products }: FeaturedProductsProps) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  }

  return (
    <Box w={{ base: '100%', lg: '90%' }} mx={'auto'} p={'2rem'}>
      <SectionHeading title={title} />
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {products.map((product) => (
          <SwiperSlide key={product.id} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <SwiperNavButton />
      </Swiper>
    </Box>
  )
}
