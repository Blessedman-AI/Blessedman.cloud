"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  });
  console.log(isMobile);

  const handleLinkClick = () => {
    setActiveLink(true);
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className=" px-4 h-full flex items-center justify-between
    sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
    >
      {/* LINKS */}
      <div className="items-center hidden md:flex gap-6 w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* {logo} */}

      <div className="md:hidden lg:flex xl:w-1/3 justify-start xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold
          flex items-center justify-center"
        >
          <span className="text-white mr-1">Bman</span>
          <span
            className="w-12 h-8 rounded bg-white
           text-black flex items-center justify-center"
          >
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="justify-end hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* {Responsive menu} */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between
         z-[51] relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* {Menu List} */}

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" z-[50] absolute top-0 left-0 w-screen h-screen
         bg-black text-white flex flex-col items-center
          justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className={`${
                  isMobile && activeLink ? "hover:text-gray-500" : ""
                }`}
                key={link.title}
              >
                <Link href={link.url} onClick={handleLinkClick}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
