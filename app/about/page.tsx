"use client";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkCard from "../components/WorkCard";

const WorkPage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [textCount, setTextCount] = useState<number>(0);

  useEffect(() => {
    const updateTextCount = () => {
      const height = window.innerHeight;
      const headerHeight = 80;
      setTextCount(Math.floor((height - headerHeight) / 150));
    };

    updateTextCount(); // 初期値の設定
    window.addEventListener("resize", updateTextCount);

    return () => {
      window.removeEventListener("resize", updateTextCount);
    };
  }, []);

  return (
    <>
      <Header />
      <Box
        position="relative"
        minHeight="100vh"
        flexDirection="column"
        pt="80px"
      >
        {[...Array(textCount)].map((_, index) => (
          <Box
            key={Math.random().toString()}
            position="relative"
            _before={{
              content: '"プロ研部員募集中！"',
              position: "absolute",
              top: `${index * 150}px`,
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "10vw",
              fontWeight: "bold",
              color: "rgba(0, 0, 0, 0.08)",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          />
        ))}
        <Container zIndex={1} position="relative">
          <VStack spacing={8} py={10} align="center">
            <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center">
              プログラミング研究会
            </Heading>
            <Text fontSize="xl" textAlign="center" maxW="50rem">
              プログラミング研究会は、毎週水曜日の放課後にEI棟3階の実験室にて活動しています。活動中は助け合いながら各自興味のある分野に取り組んでいますので、気軽にお越しください！
            </Text>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default WorkPage;
