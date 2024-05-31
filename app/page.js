"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";
import Card from "./components/CardComponent";

import WavyText from "./components/WavyText";

export default function Homepage() {
  return (
    <div
      className="h-screen flex lg:items-center 
    lg:justify-center "
    >
      <Card
        heading={
          <WavyText text="Welcome" fontSize="text-5xl lg:text-7xl" />
        }
        desc1="My name name is Blessedman Igbedion. I'm a full-stack developer
        based in Nigeria. I have developed many typed of web applications from
        streaming services to eCommerce platforms"
        desc2="I'm passionate about functional interfaces and intuitively
        implemented UX."
      />
    </div>
  );
}
