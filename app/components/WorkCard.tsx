import { useState } from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import styles from "../styles/WorkCard.module.css";

interface WorkCardProps {
 title: string;
 creator: string;
 link: string;
 image: string;
 date: string;
 width?: string;
 height?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, creator, link, image, date, width = "300px", height = "200px" }) => {
 const [isFlipped, setIsFlipped] = useState(false);

 const handleClick = () => {
  setIsFlipped(!isFlipped);
 };

 const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.stopPropagation(); // カードの回転を防ぐ
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
   <div className={`${styles.cardface} ${styles.cardfaceFront}`}>
    <Image src={image} alt={title} width="100%" height="100%" objectFit="contain" borderRadius="1vw" />
    <Box position="absolute" bottom="0" width="100%" bg="rgba(0, 0, 0, 0.5)" color="white" textAlign="center" p={2} borderRadius="0 0 1vw 1vw">
     {title}
    </Box>
   </div>
   <div className={`${styles.cardface} ${styles.cardfaceBack}`}>
    <Box p={4} textAlign="center">
     {" "}
     {/* 中央揃えを追加 */}
     <Box display="flex" alignItems="baseline" justifyContent="center">
      {" "}
      {/* 中央揃えを追加 */}
      <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
       {date}
      </Box>
     </Box>
     <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
      {title}
     </Box>
     <Box>{creator}</Box>
     <Button mt={4} colorScheme="teal" onClick={handleLinkClick}>
      Visit Link
     </Button>
    </Box>
   </div>
  </div>
 );
};

export default WorkCard;
