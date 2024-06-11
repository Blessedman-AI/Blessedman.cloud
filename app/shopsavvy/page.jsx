import React from "react";
import Card from "../components/CardComponent";
import WavyText from "../components/WavyText";
import Link from "next/link";

const shopsavvy = () => {
  return (
    <div
      className="h-screen flex lg:items-center 
  lg:justify-center "
    >
      <Card
        heading={
          <WavyText
            text="ShopSavvy"
            fontSize="text-4xl text-3xl"
            fontWeight="font-semibold"
          />
        }
        desc1="ShopSavvy enables the tracking of ecommerce products 
        and sends users timely email alerts for price drops on tracked 
        items, discounts of 40% or more and restocks, ensuring they 
        never miss a deal."
        link={
          <Link
            href="https://shopsavvy-bee.vercel.app/"
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

export default shopsavvy;
