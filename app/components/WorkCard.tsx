import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { mediaQuery, useMediaQuery } from '../hooks/useMediaQuery';
import styles from '../styles/WorkCard.module.css';

interface WorkCardProps {
  title: string;
  creators: string[];
  description: string;
  link: string;
  image: string;
  date: string;
  width?: string;
  height?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  creators,
  description,
  link,
  image,
  date,
  width = '300px',
  height = '200px',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  // スマホかどうか
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.isFlipped : ''}`}
      style={{
        width,
        height,
      }}
    >
      {/* 表面 */}
      <div className={`${styles.cardface} ${styles.cardfaceFront}`}>
        <Image
          src={image}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="1vw"
          overflow="hidden"
          onClick={handleClick}
        />
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          bg="rgba(0, 0, 0, 0.5)"
          color="white"
          textAlign="center"
          p={2}
          borderRadius="0 0 1vw 1vw"
        >
          <Image
            src={image}
            alt={title}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="1vw"
            overflow="hidden"
          />
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            textAlign="center"
            p={2}
            borderRadius="0 0 1vw 1vw"
          >
            {title}
          </Box>
      </div>
      {/* 裏面 */}
      <div
        className={`${styles.cardface} ${styles.cardfaceBack}`}
        style={{ width: '100%', height: '100%' }}
      >
        <Image
          src={image}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="1vw"
          style={{ filter: 'blur(20px)' }}
          overflow="hidden"
        />
        <Text
          color="white"
          fontWeight="normal"
          letterSpacing="wide"
          fontSize="5xs"
          textTransform="uppercase"
          position="absolute"
          top="0"
          right="0"
          mr={2}
          mt={0.5}
        >
          {date}
        </Text>
        <Flex
          p={4}
          textAlign="center"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontWeight="bold"
            color="white"
            textAlign="center"
            position="absolute"
            top="15%"
            fontSize={isSp ? '200%' : '140%'}
            mb={isSp ? '1%' : '0%'}
          >
            {title}
          </Text>
          <Flex
            color="white"
            fontSize="medium"
            alignItems="center"
            width="100%"
            height="10%"
            justifyContent="center"
            mt={isSp ? '0%' : '5%'}
          >
            {/* 作成者が複数いる場合はアイコンを並べて表示 */}
            <AvatarGroup size={isSp ? '2xs' : 'xs'} max={3}>
              {creators.map(creator => (
                <Flex key={creator} alignItems="center">
                  <Avatar
                    src={`/member/${creator}.png`}
                    name={`${creator}_avatar`}
                    mr={2}
                    size={isSp ? '2xs' : 'xs'}
                  />
                </Flex>
              ))}
            </AvatarGroup>
            <Text fontSize={isSp ? '10%' : '90%'}>{creators.join(', ')}</Text>
          </Flex>
          <Text
            color="white"
            textAlign="center"
            fontSize="60%"
            position="absolute"
            top="63%"
            w={isSp ? '80%' : '60%'}
          >
            {description}
          </Text>
          <Button
            colorScheme="teal"
            onClick={handleLinkClick}
            fontSize="80%"
            position="absolute"
            bottom="5%"
            w={isSp ? '20%' : '25%'}
            h={isSp ? '15%' : '17%'}
          >
            Visit Link
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default WorkCard;
