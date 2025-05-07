import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const WagmiDefense = () => {
  return (
    <div
      className="h-screen flex lg:items-center 
  lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="WAGMI Defense"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        desc1="WAGMI Defense is an online, card-based strategy game in which two players build decks of six cards—comprising heroes, troops, air units and special power cards—and battle to destroy the opponent’s command centre. Each card can be upgraded (using the basic resource NiFe) up to level 10, and evolved through sacrificing duplicates to reach higher rarities (Common → Rare → Epic → Legendary)."
        link={
          <Link
            href="https://creators.wagmidefense.com/"
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

export default WagmiDefense;
