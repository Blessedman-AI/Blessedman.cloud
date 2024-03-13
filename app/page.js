"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* <div
        className="overflow-x-hidden sm:overflow-y-hidden
       pb-28 sm:pb-8 h-full flex flex-col lg:flex-row px-4 
       sm:px-8 md:px-12 lg:px-20 xl:px-48"
      > */}
      <div className="overflow-y-hidden  pt-14 xl:pt-40 min-h-screen h-full flex flex-col lg:flex-row px-4 ">
        {/* IMAGE CONTAINER */}

        <div className=" flex h-full min-h-96 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className=" mt-10 md:mt-0 h-full lg:h-full lg:w-1/2 flex flex-col gap-2 items-center justify-center">
          {/* TITLE */}

          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className=" pt-2 md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="pb-16 md:pb-0 h-full pt-6 w-full flex gap-4">
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
