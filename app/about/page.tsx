"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";

const WorkPage = () => {
 const [selectedCard, setSelectedCard] = useState<number | null>(null);

 return (
  <>
   <Header />
   <p>プログラミング研究会は。。。</p>
   <p>毎週水曜日の放課後にEI棟3階の実験室にて活動しています。</p>
   <p>活動中は助け合いながら各自興味のある分野に取り組んでいますので、気軽にお越しください！</p>
   {[...Array(50)].map((_, index) => (
    <p key={index}>プロ研部員募集中！</p>
   ))}
   <Footer />
  </>
 );
};

export default WorkPage;
