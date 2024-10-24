'use client';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { mediaQuery, useMediaQuery } from '../hooks/useMediaQuery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkCard from '../components/WorkCard';

const WorkPage = () => {
  const works = [
    {
      title: 'TouchStone',
      creators: ['void2610'],
      description: '自作ゲーム',
      link: 'https://unityroom.com/games/touchstone',
      image: '/work/touchstone.jpg',
      date: '2024-06-23',
    },
    {
      title: 'Sumo Survivors!',
      creators: ['void2610'],
      description: '自作ゲーム',
      link: 'https://unityroom.com/games/sumo_survivors',
      image: '/work/SumoSurvivors.png',
      date: '2024-02-11',
    },
    {
      title: 'Simple YouTube Player',
      creators: ['void2610'],
      description: '広告なしのYouTubeプレイヤー',
      link: 'https://github.com/void2610/Simple-YouTube-Player',
      image: '/work/syp.png',
      date: '2023-07-17',
    },
    {
      title: '送り盆',
      creators: ['void2610', 'anri'],
      description: 'unity1week参加作品',
      link: 'https://unityroom.com/games/okuribon',
      image: '/work/okuribon.png',
      date: '2024-08-17',
    },
    {
      title: 'Sample1',
      creators: ['1johndoe', '2johndoe', '3johndoe'],
      description: 'サンプル',
      link: 'https://example.com',
      image: 'https://placehold.jp/3697c7/ffffff/360x180.png?text=Sample1',
      date: '1970-01-01',
    },
    {
      title: 'Sample2',
      creators: ['johndoe'],
      description: 'サンプル',
      link: 'https://example.com',
      image: 'https://placehold.jp/3697c7/ffffff/360x180.png?text=Sample2',
      date: '1970-01-01',
    },
    {
      title: 'Sample3',
      creators: ['johndoe'],
      description: 'サンプル',
      link: 'https://example.com',
      image: 'https://placehold.jp/3697c7/ffffff/360x180.png?text=Sample3',
      date: '1970-01-01',
    },
    {
      title: 'Sample4',
      creators: ['johndoe'],
      description: 'サンプル',
      link: 'https://example.com',
      image: 'https://placehold.jp/3697c7/ffffff/360x180.png?text=Sample4',
      date: '1970-01-01',
    },
  ];

  // スマホかどうか
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <>
      <Header />

      {isSp ? (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="30px"
          flexDirection="column"
        >
          {works.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              creators={work.creators}
              description={work.description}
              link={work.link}
              image={work.image}
              date={work.date}
              width={'55vw'}
              height={'33vw'}
            />
          ))}
        </Flex>
      ) : (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="50px"
          flexDirection="row"
        >
          {works.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              creators={work.creators}
              description={work.description}
              link={work.link}
              image={work.image}
              date={work.date}
              width={'36vw'}
              height={'20vw'}
            />
          ))}
        </Flex>
      )}

      <Footer />
    </>
  );
};

export default WorkPage;
