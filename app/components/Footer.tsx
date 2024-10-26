"use client";
import { Image } from "@chakra-ui/react";
import { mediaQuery, useMediaQuery } from "../hooks/useMediaQuery";

function Footer() {
  // スマホかどうか
  const isSp = useMediaQuery(mediaQuery.sp);

  const imageSize = isSp ? "5vw" : "2.5vw";
  const textSize = isSp ? "2vw" : "1vw";
  const maxHeight = isSp ? "80px" : "40px";
  return (
    <>
      <div style={{ height: "10vw" }} />
      <footer
        style={{
          backgroundColor: "#f0f0f0",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2.2vw",
          maxHeight: maxHeight,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            gap: "50%",
          }}
        >
          <p style={{ fontSize: textSize, fontWeight: "bold" }}>
            プログラミング研究会
          </p>
          <p style={{ fontSize: textSize, fontWeight: "bold" }}>部員募集中!</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            gap: "2.5vw",
          }}
        >
          <a
            href="https://discord.gg/4dCXn6hyGK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="svgs/discord-icon-svgrepo-com.svg"
              alt="discord-logo"
              width={imageSize}
              height={imageSize}
            />
          </a>
          <a
            href="https://github.com/nitfc-proken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="svgs/github-mark.svg"
              alt="github-logo"
              width={imageSize}
              height={imageSize}
            />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
