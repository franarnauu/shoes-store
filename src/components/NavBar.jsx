import React from 'react';
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, Image, Button } from '@chakra-ui/react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = ({ itemCount }) => {
    return (
        <div>
            <Flex bg="black" alignItems="center" color="white">
                <Box boxSize='100px'>
                    <Image src='/src/assets/images/logo.png' alt='Logo' sizes='100px' p={"10px"} />
                </Box>
                <Link to={"/"}>
                    <Box p="4">
                        Zentiva Store
                    </Box>
                </Link>
                <Spacer />
                <Menu>
                    <Link to="/about"><Button bg="black" color="white" _hover={{ bg: 'gray' }} border='2px' borderRadius="10px" p="10px">About</Button></Link>
                    <Spacer />
                    <Link to="/contact"><Button bg="black" color="white" _hover={{ bg: 'gray' }} border='2px' borderRadius="10px" p="10px">Contact Us</Button></Link>
                    <Spacer />
                    <MenuButton bg="black" _hover={{ bg: 'gray' }} border='2px' borderRadius="10px" p="10px">
                        Categories
                    </MenuButton>
                    <MenuList color="black">
                        <Link to="/category/Nike"><MenuItem>Nike</MenuItem></Link>
                        <Link to="/category/Adidas"><MenuItem>Adidas</MenuItem></Link>
                        <Link to="/category/Vans"><MenuItem>Vans</MenuItem></Link>
                        <Link to="/category/NewBalance"><MenuItem>New Balance</MenuItem></Link>
                    </MenuList>
                </Menu>
                <Spacer />
                <Link to="/cart">
                    <Box p="4">
                        <CartWidget itemCount={itemCount} />
                    </Box>
                </Link>
            </Flex>
        </div>
    )
}

export default NavBar;
