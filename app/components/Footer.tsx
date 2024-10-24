import { Image } from "@chakra-ui/react";

function Footer() {
 const imageSize = "5vw";
 const textSize = "2.5vw";
 return (
  <>
   <div style={{ height: "20vw" }}></div>
   <footer style={{ backgroundColor: "#7AB8BF", height: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vw", maxHeight: "80px" }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", gap: "50%" }}>
     <p style={{ fontSize: textSize }}>プログラミング研究会</p>
     <p style={{ fontSize: textSize }}>部員募集中!</p>
    </div>
    <div style={{ display: "flex", justifyContent: "right", alignItems: "center", gap: "2.5vw" }}>
     <a href="https://discord.gg/4dCXn6hyGK" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/discord-icon-svgrepo-com.svg" alt="discord-logo" width={imageSize} height={imageSize} />
     </a>
     <a href="https://github.com/nitfc-proken" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/github-mark.svg" alt="github-logo" width={imageSize} height={imageSize} />
     </a>
    </div>
   </footer>
  </>
 );
}

export default Footer;
