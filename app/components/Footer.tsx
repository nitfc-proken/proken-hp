import { Image } from "@chakra-ui/react";

function Footer() {
 return (
  <>
   <div style={{ height: "20vw" }}></div>
   <footer style={{ backgroundColor: "gray", height: "20vw", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vw", maxHeight: "5%" }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", gap: "4vw" }}>
     <p>プログラミング研究会</p>
     <p>hogehoge by 部長</p>
    </div>
    <div style={{ display: "flex", justifyContent: "right", gap: "4vw" }}>
     <a href="https://discord.com/invite/your-discord-invite-link" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/discord-icon-svgrepo-com.svg" alt="discord-logo" boxSize="10vw" />
     </a>
     <a href="https://github.com/nitfc-proken" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/github-mark.svg" alt="github-logo" boxSize="10vw" />
     </a>
    </div>
   </footer>
  </>
 );
}
export default Footer;
