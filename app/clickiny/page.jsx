import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const Clickiny = () => {
  return (
    <div
      className="h-screen  flex lg:items-center 
    lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="Clickiny"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        fontSize="4xl"
        desc1="Clickiny is a freemium service which enables online 
        business owners  connect seamlessly with customers and provide 
        support in real-time using a WhatsApp Chat Widget."
        link={
          <Link
            href="https://clickiny.com/"
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

export default Clickiny;
