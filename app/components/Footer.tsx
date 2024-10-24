import { Image } from "@chakra-ui/react";

function Footer() {
 return (
  <>
   <div style={{ height: "20vw" }}></div>
   <footer style={{ backgroundColor: "#7AB8BF", height: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vw", maxHeight: "80px" }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "right", gap: "50%" }}>
     <p style={{ fontSize: "90%" }}>プログラミング研究会</p>
     <p style={{ fontSize: "90%" }}>部員募集中!</p>
    </div>
    <div style={{ display: "flex", justifyContent: "right", alignItems: "center", gap: "20px" }}>
     <a href="https://discord.com/invite/your-discord-invite-link" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/discord-icon-svgrepo-com.svg" alt="discord-logo" width="50px" height="50px" /> {/* サイズを統一 */}
     </a>
     <a href="https://github.com/nitfc-proken" target="_blank" rel="noopener noreferrer">
      <Image src="svgs/github-mark.svg" alt="github-logo" width="50px" height="50px" /> {/* サイズを統一 */}
     </a>
    </div>
   </footer>
  </>
 );
}

export default Footer;
