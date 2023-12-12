import React from 'react';
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <Flex bg="black" alignItems="center" color="white">
                <Box boxSize='100px'>
                    <Image src='/src/assets/images/logo.png' alt='Logo' sizes='100px' p={"10px"} />
                </Box>
                <Box p="4">
                    Yankee Store
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Categorías
                    </MenuButton>
                    <MenuList color="black">
                        <MenuItem>Adidas</MenuItem>
                        <MenuItem>Nike</MenuItem>
                        <MenuItem>New Balance</MenuItem>
                        <MenuItem>Vans</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p="4">
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar