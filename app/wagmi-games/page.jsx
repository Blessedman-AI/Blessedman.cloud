import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const WagmiGames = () => {
  return (
    <div
      className="h-screen  flex lg:items-center 
    lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="WAGMI Games"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        fontSize="4xl"
        desc1="WAGMI Games is a pioneering Web3 entertainment platform that redefines the gaming and entertainment landscape. The aim is to create a vibrant ecosystem that brings together gamers, content creators, and enthusiasts from across the globe, offering them a unique blend of compelling gameplay, digital collectibles, and rich storytelling experiences."
        link={
          <Link
            href="https://www.wagmigamesapp.com/"
            target="_blank"
            className="underline font-medium"
          >
            View Site
          </Link>
        }
      />
    </div>
  );
};

export default WagmiGames;
