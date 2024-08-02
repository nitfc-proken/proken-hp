'use client';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { clear } from 'console';
import React, { useState, useEffect } from 'react';
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

                <Flex ml="auto">
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
            </Flex>
        </Box>
    );
};

export default Header;
