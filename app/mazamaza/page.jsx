import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const MazaMaza = () => {
  return (
    <div
      className="h-screen  flex lg:items-center 
lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="MazaMaza"
            fontSize="text-3xl lg:text-4xl"
            fontWeight="font-semibold"
          />
        }
        desc1="MazaMaza is an e-commerce platform built with Next.js, Tailwind CSS,
         and TypeScript. This project leverages the power of modern web 
         technologies to create a fast and efficient shopping experience. 
         The clean and scalable architecture provided by Next.js, combined 
         with the flexibility of Tailwind CSS and the robustness of TypeScript,
          makes ShopEase a cutting-edge solution for online retail."
        link={
          <Link
            href="https://mazamaza-v1.vercel.app/"
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

export default MazaMaza;
