import { Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { AppContext } from '@src/app/context/AppContext'
import { calculateItemsTotal, formatPrice } from '@src/helpers'
import React, { useContext, useEffect, useState } from 'react'

export const PaymentDetails = () => {
    const [subTotal, setSubTotal] = useState<number>(0)
    const [tax, setTax] = useState<number>(0)
    const { state: { checkout } } = useContext(AppContext)

    useEffect(() => {
        const subTotal: number = calculateItemsTotal(checkout)
        const tax = 0.1 * subTotal
        setSubTotal(subTotal)
        setTax(tax)
    }, [checkout])

    return (
        <Card borderWidth={'1px'} borderColor={'gray.200'} shadow={'none'} p={'2rem'}>
            <CardHeader>
                <Heading size={'md'}>Payment Details</Heading>
            </CardHeader>

            <CardBody>
                <Stack spacing={'2rem'}>
                    <Flex >
                        <Input type='text' placeholder='Enter Coupon Code' rounded={'full'} />
                        <Button
                            bgColor={'brand.primary'}
                            color={'white'}
                            rounded={'full'}
                            ml={'-40px'}
                            px={'2rem'}
                            _hover={{
                                bgColor: 'brandPrimaryDark'
                            }}
                            _active={{
                                bgColor: 'brandPrimaryDark'
                            }}
                        >
                            Apply Coupon
                        </Button>
                    </Flex>
                    <Divider mt={'1rem'} />

                    <Box>
                        <Heading size={'xs'} my={'1rem'}>
                            Payment Option
                        </Heading>
                        <RadioGroup>
                            <Stack>
                                <Radio value='cashOnDelivery'>Cash On Delivery</Radio>
                                <Radio value='momo'>Mobile Money Payment</Radio>
                                <Radio value='3'>Credit Card (Master/Visa)</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Stack>
                <Divider mt={'1rem'} />

                <Box>
                    <Flex justify={'space-between'} align={'center'} my={'1rem'}>
                        <Text fontWeight={'bold'}>Sub Total</Text>
                        <Text fontWeight={'bold'}>${formatPrice(subTotal)}</Text>
                    </Flex>

                    <Flex justify={'space-between'} align={'center'} my={'1rem'}>
                        <Text fontWeight={'bold'}>Tax (10%)</Text>
                        <Text fontWeight={'bold'}>${formatPrice(tax)}</Text>
                    </Flex>

                    <Flex justify={'space-between'} align={'center'} my={'1rem'}>
                        <Text fontWeight={'bold'}>Coupon Discount</Text>
                        <Text fontWeight={'bold'}>${formatPrice(tax)}</Text>
                    </Flex>

                    <Flex justify={'space-between'} align={'center'} my={'1rem'}>
                        <Text fontWeight={'bold'}>Shipping Cost</Text>
                        <Text fontWeight={'bold'}>${formatPrice(0)}</Text>
                    </Flex>
                    <Divider />
                </Box>
            </CardBody>
        </Card>
    )
}
