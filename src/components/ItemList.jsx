import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({ products }) => {
    return (
        <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </Flex>
    );
};

export default ItemList;


