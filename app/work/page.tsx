"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";

const WorkPage = () => {
 const [selectedCard, setSelectedCard] = useState<number | null>(null);

 const works = [
  {
   title: "作品1",
   creator: "制作者1",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-01-01",
  },
  {
   title: "作品2",
   creator: "制作者2",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-02-01",
  },
  {
   title: "作品3",
   creator: "制作者3",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-03-01",
  },
  {
   title: "作品4",
   creator: "制作者4",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-04-01",
  },
 ];

 return (
  <>
   <Header />
   <>
    {works.map((work, index) => (
     <WorkCard key={index} title={work.title} creator={work.creator} link={work.link} image={work.image} date={work.date} isFlipped={selectedCard === index} onClickCard={() => setSelectedCard(index)} />
    ))}
   </>
   <Footer />
  </>
 );
};

export default WorkPage;
