import React, { useContext, useState } from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Center, Image } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {

    const { cart, addToCart } = useContext(CartContext);
    console.log(cart);

    const [Count, setCount] = useState(1);

    const restar = () => {
        Count > 1 && setCount(Count - 1)
    }

    const add = () => {
        setCount(Count + 1)
    }

    return (
        <Center>
            <Card maxW='sm' m="30px" border="2px" borderColor='black' borderRadius="20px">
                <CardBody>
                    <Image
                        src={product.Image}
                        alt={product.Title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='1'>
                        <Heading size='md'>{product.Title}</Heading>
                        <Text>{product.Description}</Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${product.Price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount
                            Count={Count}
                            add={add}
                            restar={restar}
                            addToCart={() => { addToCart(product, Count) }}
                        />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Center>
    );
};

export default ItemDetail;
