"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";
import Navbar from "./Navbar";
import ProjectLinks from "./ProjectLinks";

const Card = ({ heading, desc1, desc2, link }) => {
  const year = new Date().getFullYear();

  return (
    <div
      className="  lg:px-10 px-6 overflow-auto
       lg:overflow-hidden w-full lg:w-[76vw] lg:h-[83vh] flex flex-col
        bg-[#101011] lg:pb-12 pb-14 rounded-none lg:rounded-[28px]
         border-none lg:border-2  lg:border-gray-400"
    >
      <Navbar />

      <div
        className=" h-full flex flex-col items-center justify-center
      "
      >
        <div className="  flex flex-col lg:flex-row min-w-[100%] lg:h-[50%] xl:mt-[5rem] lg:justify-between ">
          <div
            className="order-2 lg:order-1 sm:max-w-[100%] md:max-w-[60%]
         justify-start basis-3/5"
          >
            <h2>{heading}</h2>
            <p className="mt-6 ">{desc1}</p>
            <br />
            <p>{desc2}</p>
            <span>{link}</span>
          </div>
          <div
            className=" order-1 lg:order-2 flex flex-col 
        lg:justify-center items-start justify-start lg:items-start
         basis-1/5  mb-[6rem] mt-[4rem] lg:my-0 "
          >
            <ProjectLinks />
          </div>
        </div>
      </div>
      <footer
        className="h-[1rem] flex lg:mt-14 justify-start lg:items-end
     lg:justify-end mt-16"
      >
        <p className="">© {year} blessedman.cloud</p>
      </footer>
    </div>
  );
};

export default Card;
