import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const Peekture = () => {
  return (
    <div
      className="h-screen flex lg:items-center 
lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="PeekTure"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        desc1="PeekTure is a photo-sharing platform inspired by Instagram. Users can upload,
         view, and like photos in a visually engaging interface. Built with React.js and Appwrite,
          PeekTure offers a seamless user experience with real-time photo updates and simple 
          navigation."
        link={
          <Link
            href="https://peek-ture.vercel.app/"
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

export default Peekture;
