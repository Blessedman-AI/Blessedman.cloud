import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "../assets/githubIcon.png";
import gmail from "../assets/gmailIcon.png";
import linkedIn from "../assets/linkedInIcon.png";
import logo from "../assets/logo.png";

const images = [
  {
    src: github,
    alt: "github icon",
    href: "https://github.com/Blessedman-AI",
  },
  {
    src: gmail,
    alt: "gmail icon",
    href: "mailto:beemhanalabo@gmail.com",
  },
  {
    src: linkedIn,
    alt: "linkedIn icon",
    href: "https://www.linkedin.com/in/blessedman-igbedion/",
  },
];

const Navbar = () => {
  return (
    <div
      className=" bg-[#101011] 
      rounded-[32px] w-full  
       flex items-center justify-between pt-6  "
    >
      <div className="flex justify-start">
        <Link href="/">
          <Image
            src={logo}
            alt="blessedman logo"
            width={54}
            height={54}
          />
        </Link>
      </div>

      <div className="flex gap-8">
        {images.map((image, index) => (
          <Link href={image.href} key={index} target="_blank">
            <Image
              src={image.src}
              alt={image.alt}
              width={34}
              height={34}
              className="hover:scale-125  transition duration-500
              ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
