import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Center, Image } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ product }) => {

    const { id } = useParams

    return (
        <Center>
            <Card maxW='sm' m="30px" border="2px" borderColor='black' borderRadius="20px">
                <CardBody>
                    <Image
                        src={`../src/assets/images/${product.image}`}
                        alt={product.title}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='1'>
                        <Heading size='md'>{product.title}</Heading>
                        <Text>{product.description}</Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${product.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </Center>
    );
};

export default ItemDetail;
