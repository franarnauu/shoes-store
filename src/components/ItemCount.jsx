import { React, useEffect, useState } from 'react'
import { Button, Stack, Alert, AlertIcon, Center, Text, Flex } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const alertAgregadoAlCarrito = () => {
        <Stack spacing={3}>
            <Alert status='success'>
                <AlertIcon />
                {contador} sneakers have been added to cart!
            </Alert>
        </Stack>
    }

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <Flex align='center'>
            <Button colorScheme='teal' size='md' onClick={restar}>-</Button >
            <Center m="40px">
                <Text>{contador}</Text>
            </Center>
            <Button colorScheme='teal' size='md' onClick={sumar}>+</Button>
            <Button onClick={() => alertAgregadoAlCarrito()} bg="black" color="white" colorScheme='blackAlpha' borderRadius="10px" m="30px" width="100%">Add to cart</Button>
        </Flex >
    )
}

export default ItemCount