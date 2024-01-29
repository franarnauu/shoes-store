import React from 'react'
import { Button, Center, Text, Flex } from '@chakra-ui/react'

const ItemCount = ({ Count, restar, add, addToCart }) => {

    return (
        <Flex align='center'>
            <Button colorScheme='teal' size='md' onClick={restar}>-</Button >
            <Center m="40px">
                <Text>{Count}</Text>
            </Center>
            <Button colorScheme='teal' size='md' onClick={add}>+</Button>
            <Button onClick={addToCart} bg="black" color="white" colorScheme='blackAlpha' borderRadius="10px" m="30px" width="100%">Add to cart</Button>
        </Flex >
    )
}

export default ItemCount