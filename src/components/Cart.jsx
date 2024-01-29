import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import Form from './Form';

const Cart = () => {
    const { cart, precioTotal, emptyCart, addToCart } = useContext(CartContext);
    const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar el formulario

    const empty = () => {
        emptyCart();
    };

    const buy = () => {
        setShowForm(true);
    };

    const increment = (id) => {
        addToCart(cart.find(prod => prod.id === id), 1);
    };

    const decrement = (id) => {
        const currentItem = cart.find(prod => prod.id === id);
        if (currentItem.Count > 1) {
            addToCart(currentItem, -1);
        } else {
            removeFromCart(id);
        }
    };

    const removeFromCart = (id) => {
        addToCart(cart.find(prod => prod.id === id), -cart.find(prod => prod.id === id).Count);
    };

    // Filtra los productos que tengan una cantidad mayor que cero
    const filteredCart = cart.filter(prod => prod.Count > 0);

    return (
        <VStack spacing="4" align="stretch">
            {filteredCart.map((prod) => (
                <Flex
                    key={prod.id}
                    align="center"
                    justify="space-between"
                    w="95%"
                    p="4"
                    border="2px"
                    borderColor="black"
                    borderRadius="20px"
                    m="3"
                >
                    <Image src={prod.Image} alt={prod.Title} boxSize="100px" />
                    <Text>{prod.Title}</Text>
                    <Flex align="center">
                        <Button size="sm" colorScheme="teal" onClick={() => increment(prod.id)}>
                            +
                        </Button>
                        <Text mx="2">{prod.Count}</Text>
                        <Button size="sm" colorScheme="teal" onClick={() => decrement(prod.id)}>
                            -
                        </Button>
                        <Button size="sm" colorScheme="red" ml="3" onClick={() => removeFromCart(prod.id)}>
                            Remove from cart
                        </Button>
                    </Flex>
                    <Text>${prod.Price} x {prod.Count}</Text>
                    <Text>${prod.Price * prod.Count}</Text>
                </Flex>
            ))}
            <Flex align="center" justify="center" w="100%">
                {filteredCart.length > 0 ? (
                    <Flex align="center" justify="flex-end" w="95%" m="2">
                        <Text>Total price: ${precioTotal().toFixed(2)}</Text>
                        <Flex ml="4">
                            <Button colorScheme="red" onClick={empty} mr="2">
                                Empty cart
                            </Button>
                            <Button colorScheme="teal" onClick={buy}>
                                Buy
                            </Button>
                        </Flex>
                    </Flex>
                ) : (
                    <Text fontSize="xl" m="10">Your cart is empty</Text>
                )}
            </Flex>
            {/* Mostrar el formulario si showForm es true */}
            {showForm && <Form showForm={showForm} setShowForm={setShowForm} cart={filteredCart} />}
        </VStack>
    );
};

export default Cart;