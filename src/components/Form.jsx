import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const Form = ({ showForm, setShowForm, cart }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);

    const db = getFirestore();
    const ordersCollection = collection(db, "Order");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            name: name,
            email: email,
            cart: cart.map(item => ({
                id: item.id,
                title: item.Title,
                price: item.Price,
                count: item.Count
            }))
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            setShowForm(false); // Oculta el formulario después de enviarlo
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div style={{ display: showForm ? "block" : "none", margin: "20px", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
            <VStack spacing="4">
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type='mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" onClick={handleSubmit}>Send</Button>
            </VStack>
            {orderId && <p>{orderId}</p>}
        </div>
    );
};

export default Form;