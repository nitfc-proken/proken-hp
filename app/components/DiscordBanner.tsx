import { Center } from "@chakra-ui/react";
import type React from "react";

const DiscordBanner: React.FC = () => {
  return (
    <div>
      <iframe
        src="https://discord.com/widget?id=1232959589704663070"
        width="100%"
        height="500"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        title="Discord Widget"
      />
    </div>
  );
};

interface DiscordBannerProps {
  guildId: string;
  style: string;
}

const DiscordBannerImage = ({ guildId, style }: DiscordBannerProps) => {
  const iconUrl = `https://discord.com/api/guilds/${guildId}/widget.png?style=${style}`;

  return (
    <Center>
      <a href={"https://discord.gg/4dCXn6hyGK"}>
        <img
          src={iconUrl}
          alt="Discord Server Icon"
          style={{ maxWidth: "100%" }}
        />
      </a>
    </Center>
  );
};

export { DiscordBanner, DiscordBannerImage };
