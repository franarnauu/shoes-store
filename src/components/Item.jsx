import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react';

const Item = ({ product }) => (
    <Card maxW='sm' m="30px" border="2px" borderColor='black' borderRadius="20px" _hover={{ scale: '1.1' }}>
        <CardBody>
            <Image src={product.Image} alt={product.Title} borderRadius='lg' />
            <Stack mt='6' spacing='3'>
                <Heading size="md">{product.Title}</Heading>
                <Divider />
                <Text>{product.Description}</Text>
                <Text color='blue.600' fontSize='2xl'>${product.Price}</Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Link to={`/item/${product.id}`}>
                    <Button bg="black" color="white" colorScheme='blackAlpha' borderRadius="10px">See more</Button>
                </Link>
            </ButtonGroup>
        </CardFooter>
    </Card>
);

export default Item;