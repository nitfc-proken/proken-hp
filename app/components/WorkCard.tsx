import { useState } from "react";
import { Box, Image, Button, Avatar } from "@chakra-ui/react";
import styles from "../styles/WorkCard.module.css";

interface WorkCardProps {
 title: string;
 creator: string;
 description: string;
 link: string;
 image: string;
 date: string;
 width?: string;
 height?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, creator, description, link, image, date, width = "300px", height = "200px" }) => {
 const [isFlipped, setIsFlipped] = useState(false);

 const handleClick = () => {
  setIsFlipped(!isFlipped);
 };

 const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation();
  window.open(link, "_blank");
 };

 return (
  <div
   className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}
   onClick={handleClick}
   style={{
    width,
    height,
   }}
  >
   {/* 表面 */}
   <div className={`${styles.cardface} ${styles.cardfaceFront}`}>
    <Image src={image} alt={title} width="100%" height="100%" objectFit="cover" borderRadius="1vw" overflow="hidden" />
    <Box position="absolute" bottom="0" width="100%" bg="rgba(0, 0, 0, 0.5)" color="white" textAlign="center" p={2} borderRadius="0 0 1vw 1vw">
     {title}
    </Box>
   </div>
   {/* 裏面 */}
   <div className={`${styles.cardface} ${styles.cardfaceBack}`}>
    <Image src={image} alt={title} width="100%" height="100%" objectFit="cover" borderRadius="1vw" style={{ filter: "blur(20px)" }} overflow="hidden" />
    <Box p={4} textAlign="center" position="absolute" top="0" left="0" width="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
     <Box color="white" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
      {date}
     </Box>
     <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated color="white">
      {title}
     </Box>
     <Box color="white" fontSize="medium" display="flex" alignItems="center">
      <Avatar src={`/member/${creator}.png`} size="sm" name={creator} mr={2} />
      {creator}
     </Box>
     <Box mt="2" color="white" fontSize="sm" textAlign="left">
      {description}
     </Box>
     <Button mt={4} colorScheme="teal" onClick={handleLinkClick}>
      Visit Link
     </Button>
    </Box>
   </div>
  </div>
 );
};

export default WorkCard;
