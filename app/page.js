"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";
import Card from "./components/CardComponent";

import WavyText from "./components/WavyText";

export default function Homepage() {
  return (
    <section
      className="h-screen flex lg:items-center 
    lg:justify-center "
    >
      <Card
        heading={
          <WavyText text="Welcome" fontSize="text-5xl lg:text-7xl" />
        }
        desc1="My name is Blessedman Igbedion – A Software 
        Engineer with a strong  focus on JavaScript and related technologies 
        and a proven track record in developing and deploying robust production-grade
        applications."
        desc2="I'm passionate about problem-solving, 
         optimising performance, and delivering high-quality, 
         scalable solutions."
      />
    </section>
  );
}
