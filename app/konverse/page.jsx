import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const Konverse = () => {
  return (
    <div
      className="h-screen  flex lg:items-center 
    lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="Konverse"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        fontSize="4xl"
        desc1="Konverse is a blog platform built with Next.js, presenting a
         collection of content yet to be filled. Designed with simplicity
          in mind, Converse serves as a canvas for future thoughts and ideas.
           Stay tuned as this space evolves to become a source of inspiration 
           and reflection on various subjects."
        link={
          <Link
            href="https://konverse-v1.vercel.app/"
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

export default Konverse;
