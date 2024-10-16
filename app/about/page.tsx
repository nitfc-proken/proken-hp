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
   <p>プロ研部員募集中！</p>
   <Footer />
  </>
 );
};

export default WorkPage;
