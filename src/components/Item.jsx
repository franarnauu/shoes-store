import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image } from '@chakra-ui/react';

const Item = ({ title, description, price, id, image }) => {
    return (
        <Card maxW='sm' m="30px" border="2px" borderColor='black' borderRadius="20px" _hover={{ scale: '1.1' }}>
            <CardBody>
                <Image
                    src={`../src/assets/images/${image}`}
                    alt={title}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size="md">{title}</Heading>
                    <Divider />
                    <Text>{description}</Text>
                    <Text color='blue.600' fontSize='2xl'>${price}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to={`/product/${id}`}>
                        <Button bg="black" color="white" colorScheme='blackAlpha' borderRadius="10px">See more</Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default Item;
