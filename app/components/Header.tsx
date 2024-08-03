'use client';
import React, { useState, useEffect } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack } from "@chakra-ui/react";
const Header = () => {
    const name = '<NITFC Proken />';
    const [cnt, setCnt] = useState(0);
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [cursor, setCursor] = useState('|');
    const [complete, setComplete] = useState(false);
    useEffect(() => {
        const update = setInterval(() => {
            if (cnt < 1)
                setText1(text1 + name[cnt]);
            else if (cnt < 14)
                setText2(text2 + name[cnt]);
            else if (cnt < name.length)
                setText3(text3 + name[cnt]);
            setCnt(cnt + 1);
            if (cnt === name.length) {
                setComplete(true);
                clearTimeout(update);
            }
        }, 150);
        return () => clearInterval(update);
    }, [cnt, text1, text2, text3]);

    useEffect(() => {
        const update = setInterval(() => {
            if (complete) {
                setCursor(cursor === '' ? '|' : '');
            } else {
                setCursor('|');
            }

        }, 600);
        return () => clearInterval(update);
    }, [cursor, complete]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box bg="white" p={4}>
            <Flex alignItems="center">
                <Heading as="h1" size="lg" color="gray">
                    {text1}
                </Heading>
                <Heading as="h1" size="lg" color="teal.500">
                    {text2}
                </Heading>
                <Heading as="h1" size="lg" color="gray">
                    &nbsp;
                    {text3}
                </Heading>
                <Heading as="h1" size="lg" color="gray">
                    &nbsp;
                    {cursor}
                </Heading>

                <Flex ml="auto" display={{ base: "none", md: "flex" }}>
                    <Button colorScheme="gray" variant="ghost" color="black" mr={4}>
                        Home
                    </Button>
                    <Button colorScheme="gray" variant="ghost" color="black" mr={4}>
                        About
                    </Button>
                    <Button colorScheme="gray" variant="ghost" color="black">
                        Contact
                    </Button>
                </Flex>

                <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    display={{ base: "flex", md: "none" }}
                    onClick={onOpen}
                    colorScheme="gray"
                    ml="auto"
                />
            </Flex>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent maxWidth={{ base: '50%', sm: '15em' }}>

                    <DrawerCloseButton />
                    <DrawerHeader paddingTop={'10.5px'}>Menu</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={4}>
                            <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
                                Home
                            </Button>
                            <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
                                About
                            </Button>
                            <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
                                Contact
                            </Button>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;
