import React from 'react';
import ItemListContainer from './ItemListContainer';
import { Center, Text } from '@chakra-ui/react';

const Home = () => {
    return (
        <div>
            <Center>
                <Text fontSize='30px' m="30px" bg="black" color="white" p="20px" borderRadius="20px" as="b">Welcome to Zentiva Store</Text>
            </Center>
            <ItemListContainer />
        </div>
    );
};

export default Home;