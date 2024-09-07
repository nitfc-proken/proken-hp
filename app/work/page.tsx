"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";

const WorkPage = () => {
 const works = [
  {
   title: "TouchStone",
   creator: "void2610",
   description: "自作ゲーム",
   link: "https://unityroom.com/games/touchstone",
   image: "/work/touchstone.jpg",
   date: "2024-06-23",
  },
  {
   title: "Sumo Survivors!",
   creator: "void2610",
   description: "自作ゲーム",
   link: "https://unityroom.com/games/sumo_survivors",
   image: "/work/SumoSurvivors.png",
   date: "2024-02-11",
  },
  {
   title: "作品3",
   creator: "制作者3",
   description: "説明3",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-03-01",
  },
  {
   title: "作品4",
   creator: "制作者4",
   description: "説明4",
   link: "https://google.com",
   image: "https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
   date: "2023-04-01",
  },
 ];
 const isMobile = window.innerHeight > window.innerWidth;
 const width = isMobile ? "55vw" : "42vw";
 const height = isMobile ? "33vw" : "25vw";
 return (
  <>
   <Header />
   <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap="50px" flexDirection={isMobile ? "column" : "row"}>
    {works.map((work, index) => (
     <WorkCard key={index} title={work.title} creator={work.creator} description={work.description} link={work.link} image={work.image} date={work.date} width={width} height={height} />
    ))}
   </Box>
   <Footer />
  </>
 );
};

export default WorkPage;
