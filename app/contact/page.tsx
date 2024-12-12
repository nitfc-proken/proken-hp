import { Link } from "@chakra-ui/react";
import { DiscordBanner, DiscordBannerImage } from "../components/DiscordBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold py-3">Contact</h1>
          <p className="text-2xl font-bold text-center max-w-[50rem]">
            主にDiscordを用いてコミュニケーションを取っています。
            <br /> 入部や見学などはいつでも受け付けていますので、
            <br />
            気軽に
            <Link color="teal.500" href="https://discord.gg/4dCXn6hyGK">
              Discordサーバー
            </Link>
            へ参加してください！
          </p>
          <div style={{ margin: "75px 0", width: "100%" }}>
            <DiscordBannerImage guildId="1232959589704663070" style="banner1" />
          </div>
          <div style={{ margin: "75px 0", width: "100%" }}>
            <DiscordBanner />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
