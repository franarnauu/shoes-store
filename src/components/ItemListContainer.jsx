import React from 'react';
import { Center } from '@chakra-ui/react';

function ItemListContainer({ greeting }) {
    return (
        <Center p="10">
            {greeting}
        </Center>
    );
}

export default ItemListContainer;
