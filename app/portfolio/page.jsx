"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "from-red-200 to-blue-200",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-200 to-violet-200",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-200 to-purple-200",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-200 to-red-200",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
  {
    id: 5,
    color: "from-red-200 to-red-200",
    title: "Instagram clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/16764124/pexels-photo-16764124/free-photo-of-programmer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef();
  const numItems = items.length; // Get the number of items

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const scrollExtent = isMobile ? "-30%" : "-(numItems - 1) * 100%";

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollExtent]);

  // ...

  const { scrollYProgress } = useScroll({ target: ref });
  // const x = useTransform(scrollYProgress, [0, 1], ["-5%", "-75%"]);

  // Calculate scroll extent based on number of items
  // const scrollExtent = `-${(numItems - 1) * 20}%`;
  const scrollExtent = isMobile
    ? `-${(numItems - 1) * 22}%`
    : `-${(numItems - 1) * 20}%`;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? "22%" : "-20%", scrollExtent]
  );

  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* <div className="h-[calc(100vh-6rem)]"> </div> */}
      <div className="h-[600vh] relative" ref={ref}>
        <div
          className="w-screen h-[calc(100vh-6rem)] flex items-center
         justify-center text-6xl md:text-8xl text-center"
        >
          My Portfolio
        </div>
        <div
          className="bg-gradient-to-r from-red-200
             to-red-200 sticky top-0 flex h-screen gap-4 items-center
         overflow-hidden"
        >
          <motion.div style={{ x }} className="flex ">
            <div
              className="  h-screen lg:w-[50%] flex items-center 
            justify-center bg-gradient-to-r from-purple-200
             to-red-200"
            />
            {items.map((item, index) => (
              <div
                className={`h-screen w-screen flex items-center justify-center
                 bg-gradient-to-r ${item.color}`}
                key={item.id}
                style={{ zIndex: items.length - index }}
              >
                <div
                  className="lg:mt-32 lg:mb-32 flex flex-col
                 gap-8 text-black"
                >
                  <h1
                    className="text-4xl font-bold
                   md:text-4xl lg:text-4xl xl:text-4xl"
                  >
                    {item.title}
                  </h1>

                  <div
                    className="relative w-80 h-56 md:w-96 md:h-64 
                  lg:w-[300px] lg:h-[105px] xl:w-[600px] xl:h-[420px]"
                  >
                    <Image className="rounded-xl" src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button
                      className="pt-4 pb-4 pr-8 pl-8 text-md md:text-md 
                     lg:pr-4 lg:pl-4 lg:text-lg bg-white lg:pt-2 lg:pb-2
                      text-gray-600 font-semibold m-4 rounded"
                    >
                      View Live site
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div
        className=" pr-8 pl-8 bg-gradient-to-b from-blue-100 to-red-100 w-screen h-screen
       flex flex-col gap-8 items-center justify-center text-center"
      >
        <h1 className="text-3xl md:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 120,120 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className=" w-[90px] h-[90px] md:w-28 md:h-28 absolute top-0
             left-0 right-0 bottom-0 m-auto bg-black text-white
              rounded-full flex items-center justify-center"
          >
            <span className="font-semibold">
              {" "}
              Contact <br />
              Me
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
