"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Opportunities() {
  const images = [
    {
      original: "/Opportunities/Op1.jpg",
      thumbnail: "/Opportunities/Op1.jpg",
      description:
        "高専プログラミングコンテスト2023競技部門に出場し、優勝しました。",
    },
    {
      original: "/Opportunities/Op2.jpg",
      thumbnail: "/Opportunities/Op2.jpg",
      description:
        "プログラミング研究会では、Unityを用いてゲームを製作しています。",
    },
    {
      original: "/Opportunities/Op5.jpg",
      thumbnail: "/Opportunities/Op5.jpg",
      description:
        "高専プログラミングコンテスト2022課題部門に出場し、特別賞を頂きました。",
    },
    {
      original: "/Opportunities/Op6.jpg",
      thumbnail: "/Opportunities/Op6.jpg",
      description: "起業家甲子園に出場し、賞を頂きました。",
    },
    {
      original: "/Opportunities/Op7.jpg",
      thumbnail: "/Opportunities/Op7.jpg",
      description:
        "ふくいソフトウェアコンペに出場し、株式会社アイジュピタ賞を頂きました。",
    },
    /*
    {
      original: "/Opportunities/Op3.jpg",
      thumbnail: "/Opportunities/Op3.jpg",
      description: "さまざまなコンテストに出場し、賞金を荒稼ぎしています。",
    },
    {
      original: "/Opportunities/Op4.jpg",
      thumbnail: "/Opportunities/Op4.jpg",
      description: "もらった金で、ボロボロになったGoogleを見に行きました。",
    },*/
  ];

  return (
    <div className="p-10">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold py-3">Opportunities</h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold text-center max-w-[50rem]">
          プログラミング研究会では、以下のような活動を行っています。
        </p>
      </div>
      <div className="mt-10 sm:px-10 lg:px-20">
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={15000}
          showThumbnails={true}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      </div>
    </div>
  );
}

export default Opportunities;
