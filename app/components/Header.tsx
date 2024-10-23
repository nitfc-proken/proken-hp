"use client";
import React, { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
 const name = "<NITFC Proken />";
 const [cnt, setCnt] = useState(0);
 const [text1, setText1] = useState("");
 const [text2, setText2] = useState("");
 const [text3, setText3] = useState("");
 const [cursor, setCursor] = useState("|");
 const [complete, setComplete] = useState(false);
 useEffect(() => {
  const update = setInterval(() => {
   if (cnt < 1) setText1(text1 + name[cnt]);
   else if (cnt < 14) setText2(text2 + name[cnt]);
   else if (cnt < name.length) setText3(text3 + name[cnt]);
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
    setCursor(cursor === "" ? "|" : "");
   } else {
    setCursor("|");
   }
  }, 600);
  return () => clearInterval(update);
 }, [cursor, complete]);

 const { isOpen, onOpen, onClose } = useDisclosure();

 return (
  <Box bg="white" p={4}>
   <Flex alignItems="center">
    <Flex>
     <Link href="/">
      <Heading as="h1" size="lg" color="gray">
       {text1}
      </Heading>
     </Link>
     <Link href="/">
      <Heading as="h1" size="lg" color="teal.500">
       {text2}
      </Heading>
     </Link>
     <Link href="/">
      <Heading as="h1" size="lg" color="gray">
       &nbsp;
       {text3}
      </Heading>
     </Link>
     <Link href="/">
      <Heading as="h1" size="lg" color="gray">
       &nbsp;
       {cursor}
      </Heading>
     </Link>
    </Flex>

    <Flex ml="auto" display={{ base: "none", md: "flex" }}>
     <Link href="/">
      <Button colorScheme="gray" variant="ghost" color="black" mr={4}>
       Home
      </Button>
     </Link>
     <Link href="/about">
      <Button colorScheme="gray" variant="ghost" color="black" mr={4}>
       About
      </Button>
     </Link>
     <Link href="/work">
      <Button colorScheme="gray" variant="ghost" color="black" mr={4}>
       Work
      </Button>
     </Link>
     <Link href="/contact">
      <Button colorScheme="gray" variant="ghost" color="black">
       Contact
      </Button>
     </Link>
    </Flex>

    <IconButton aria-label="Open Menu" icon={<HamburgerIcon />} display={{ base: "flex", md: "none" }} onClick={onOpen} colorScheme="gray" ml="auto" />
   </Flex>

   <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent maxWidth={{ base: "50%", sm: "15em" }}>
     <DrawerCloseButton />
     <DrawerHeader paddingTop={"10.5px"}>Menu</DrawerHeader>

     <DrawerBody>
      <Stack spacing={4}>
       <Link href="/">
        <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
         Home
        </Button>
       </Link>
       <Link href="/about">
        <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
         About
        </Button>
       </Link>
       <Link href="/work">
        <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
         Work
        </Button>
       </Link>
       <Link href="/contact">
        <Button w="100%" colorScheme="teal" variant="ghost" onClick={onClose}>
         Contact
        </Button>
       </Link>
      </Stack>
     </DrawerBody>
    </DrawerContent>
   </Drawer>
   <div style={{ height: "5vw" }}></div>
  </Box>
 );
};

export default Header;
