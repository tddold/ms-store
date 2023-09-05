import { Box, Card, CardBody, CardHeader, FormLabel, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const DeliveryInformation = () => {
    return (
        <Card borderWidth={'1px'} borderColor={'gray.200'} shadow={'none'}>
            <CardHeader>
                <Heading size={'md'}>Delivery Information</Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing={'2rem'}>
                    <Box>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' placeholder='Full Name' />
                    </Box>

                    <Box>
                        <FormLabel>Address</FormLabel>
                        <Input type='text' placeholder='address' />
                    </Box>

                    <Box>
                        <FormLabel>Phone</FormLabel>
                        <Input type='text' placeholder='phone number' />
                    </Box>

                    <Box>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' placeholder='email' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
