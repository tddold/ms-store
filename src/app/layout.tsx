'use client'

import 'swiper/swiper-bundle.css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './theme'
import Navbar from '@src/components/Navbar/Navbar'
import { Footer } from '@src/components/Footer';
import { AppContextProvider } from './context/AppContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My Store</title>
        <meta title='description' content='OnLine Shopping made easy!' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='shopping_cart.png'
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
