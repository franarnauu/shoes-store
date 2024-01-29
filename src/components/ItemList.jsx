import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
    console.log("Primer Producto en ItemList:", productos[0]);

    // Verifica si productos está vacío o indefinido
    if (!productos || productos.length === 0) {
        return <div>There are no products available</div>;
    }

    return (
        <Flex flexWrap="wrap" justifyContent="space-around">
            {productos.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                />
            ))}
        </Flex>
    );
};

export default ItemList;