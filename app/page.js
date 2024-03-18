"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  });
  return (
    <motion.div
      className="h-[calc(100vh-6rem)]  item-center justify-center
       min-h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div
        className="overflow-hidden pl-4 gap-12 flex flex-col
         md:flex-row h-full  w-full  min-h-full items-center justify-around"
      >
        {/* IMAGE CONTAINER */}{" "}
        <div
          className=" flex-shrink h-[30%] w-2/3 items-center justify-center
         flex flex-1 pt-12 "
        >
          <Image
            src="/hero.png"
            alt=""
            width={isMobile ? 350 : 500}
            height={isMobile ? 250 : 500}
            loading="lazy"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex-shrink pt-8 flex flex-col max-w-[800px]  flex-1 pr-14">
          <h1 className="text-3xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          <p className=" pt-2 md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* BUTTONS */}
          <div className="pb-6 md:pb-0 h-full pt-6 w-full flex gap-4">
            <button
              className="p-4 rounded-lg ring-1 ring-black
           bg-black text-white"
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1
           ring-black"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
