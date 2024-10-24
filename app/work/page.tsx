"use client";
import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";

const WorkPage = () => {
 const works = [
  {
   title: "TouchStone",
   creators: ["void2610"],
   description: "自作ゲーム",
   link: "https://unityroom.com/games/touchstone",
   image: "/work/touchstone.jpg",
   date: "2024-06-23",
  },
  {
   title: "Sumo Survivors!",
   creators: ["void2610"],
   description: "自作ゲーム",
   link: "https://unityroom.com/games/sumo_survivors",
   image: "/work/SumoSurvivors.png",
   date: "2024-02-11",
  },
  {
   title: "Simple YouTube Player",
   creators: ["void2610"],
   description: "広告なしのYouTubeプレイヤー",
   link: "https://github.com/void2610/Simple-YouTube-Player",
   image: "/work/syp.png",
   date: "2023-07-17",
  },
  {
   title: "送り盆",
   creators: ["void2610", "anri"],
   description: "unity1week参加作品",
   link: "https://unityroom.com/games/okuribon",
   image: "/work/okuribon.png",
   date: "2024-08-17",
  },
  {
   title: "my_portfolio",
   creators: ["aoiacai"],
   description: "自身のポートフォリオサイト",
   link: "https://aoiacai.github.io/my_portfolio/",
   image: "/work/aoiacai_portfolio.png",
   date: "2023-6-30",
  },
  {
   title: "Pomodoro Timer",
   creators: ["aoiacai"],
   description: "ポモドーロタイマー",
   link: "https://aoiacai.github.io/pomodoro_simple/",
   image: "/work/pom_timer.png",
   date: "2023-06-30",
  },
  {
   title: "procon34_Open",
   creators: ["蟹高専"],
   description: "第34回高専プロコン競技部門で優勝したプログラム",
   link: "https://github.com/aoiacai/procon34_Open",
   image: "/work/procon34.png",
   date: "2023-10-15",
  },
 ];

 // スマホかどうか
 const isSp = useMediaQuery(mediaQuery.sp);

 return (
  <>
   <Header />
   <Center>
    <Text style={{ fontSize: isSp ? "2.5rem" : "3rem", fontWeight: "bold", paddingTop: "3rem", paddingBottom: "2rem", backgroundImage: "linear-gradient(45deg, #f43f5e, #3b82f6)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Works</Text>
   </Center>
   <Center>
    <Text style={{ fontSize: isSp ? "1rem" : "1.75rem", fontWeight: "bold", paddingBottom: "3rem", WebkitBackgroundClip: "text", backgroundClip: "text" }}>プロ研メンバーが作成した作品を紹介しています</Text>
   </Center>
   {isSp ? (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="30px" flexDirection="column">
     {works.map((work, index) => (
      <WorkCard key={index} title={work.title} creators={work.creators} description={work.description} link={work.link} image={work.image} date={work.date} width={"55vw"} height={"33vw"} />
     ))}
    </Flex>
   ) : (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="50px" flexDirection="row">
     {works.map((work, index) => (
      <WorkCard key={index} title={work.title} creators={work.creators} description={work.description} link={work.link} image={work.image} date={work.date} width={"36vw"} height={"20vw"} />
     ))}
    </Flex>
   )}

   <Footer />
  </>
 );
};

export default WorkPage;
