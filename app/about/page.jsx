"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";

import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef, useEffect } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true });

  return (
    <motion.div
      className="h-[calc(100vh-6rem)] "
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className=" h-full w-full overflow-y-scroll lg:flex "
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="lg:flex-1 p-16 lg:p-24">
          {/* BIO CONTAINER */}
          <div className=" flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>

            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="127"
                height="35"
                viewBox="0 0 127 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2C1.16189 5.61141 1.9889 9.35148 2.47127 12.9231C3.32971 19.2792 3.99863 25.6708 5 32"
                  stroke="black"
                  strokeLinecap="round"
                />
                <path
                  d="M3 1.12164C3.49301 0.975778 3.92112 0.988879 4.44893 1.02011C7.07396 1.17543 9.84573 1.50878 12.346 2.34842C13.961 2.89076 16.6349 4.15195 16.2013 6.31645C15.5999 9.31894 12.366 12.0717 10.431 14.244C9.1675 15.6626 6.99943 17.4645 8.50762 19.4812C10.6812 22.3875 14.8989 23.7719 18.0146 25.3274C19.4584 26.0482 23.0884 27.3009 23.3189 29.3716C23.5723 31.6487 19.0821 32.5575 17.735 32.9335C17.0924 33.1129 5.78437 35.7051 7.25358 32.0875C8.40441 29.2537 12.34 27.0613 14.7778 25.6066C17.7634 23.8252 21.1144 22.2142 24.5729 21.6132C27.8437 21.0449 29.426 23.5538 29.8094 26.5204C30.1148 28.8838 30.826 24.9987 31.1143 24.2529C31.7674 22.5629 32.3777 21.1191 33.6901 23.1784C34.334 24.1888 34.7622 25.6956 35.6136 26.5458C36.1738 27.1051 37.1075 24.4915 37.1387 24.4221C37.8617 22.8202 40.3698 15.1578 43.0022 18.7112C44.8804 21.2465 45.1987 24.4868 46.2899 27.358C47.1835 29.7094 48.8475 31.0189 51.4077 30.0484C53.7848 29.1474 60.6756 23.9313 57.6525 20.7502C55.9797 18.99 52.6767 19.1063 50.6366 20.0226C48.7727 20.8599 48.6751 22.8344 50.5519 23.7622C52.5105 24.7305 54.9263 24.0616 56.6357 22.9162C57.0272 22.6538 57.4777 22.2083 57.7711 21.8163C57.8756 21.6767 57.8537 21.3282 58.0253 21.3594C58.3239 21.4136 59.5615 25.3297 59.6352 25.4882C59.9941 26.2597 61.5596 30.2188 63.1432 29.397C65.1132 28.3746 64.3041 24.0674 64.5497 22.3155C64.6581 21.5425 65.1356 23.7675 65.3293 24.5237C65.3731 24.6948 66.2427 28.6349 66.5325 28.5594C67.3492 28.3466 68.2931 20.4396 69.5066 21.1225C71.0578 21.9955 73.6839 30.1638 75.8615 28.0433C77.9626 25.9974 79.3949 22.822 80.7675 20.3103C82.618 16.9241 84.1686 13.3498 86.1226 10.0222C87.0006 8.52719 86.7082 10.7723 86.6988 11.2405C86.6166 15.3357 86.3963 19.4279 86.4446 23.5253C86.4488 23.8767 87.2553 29.9158 86.631 30.26C86.0385 30.5866 85.3073 29.966 84.6652 29.7523C83.3195 29.3044 82.0864 28.8446 80.6828 28.5848C80.6524 28.5791 75.6969 28.2174 77.5477 29.7354C80.2048 31.9147 85.4028 31.2315 88.3426 30.3953C91.1001 29.611 94.5132 28.0075 95.655 25.1328C96.1627 23.8548 95.4405 19.3366 93.0538 20.5387C90.8438 21.6518 92.2727 25.5799 93.3334 26.8926C95.7447 29.8769 98.4323 27.3308 100.002 24.9636C101.713 22.3828 102.787 19.4514 102.637 16.3423C102.618 15.9491 102.536 14.7887 102.459 15.1747C102.337 15.7837 102.471 18.0357 102.476 18.1021C102.63 20.241 102.814 21.7862 103.366 23.8722C103.56 24.6068 104.063 26.6441 104.976 27.2395C106.704 28.3675 108.204 23.1827 108.399 22.4508C108.858 20.7282 108.867 19.2111 108.848 17.4675C108.841 16.8049 108.947 17.0845 109.356 17.5352C110.629 18.938 111.035 19.6069 112.644 20.9025C115.898 23.5234 119.854 25.2792 124.015 25.7928C124.677 25.8745 125.944 26.1859 125.998 25.522C126.062 24.7342 124.743 24.4861 123.981 24.2699C115.55 21.8751 105.625 22.7338 97.0531 23.0684C78.4851 23.7934 59.9986 25.7694 41.5194 27.6203C32.6717 28.5064 23.7909 29.5774 14.8965 29.9046C13.9145 29.9407 13.7466 29.8882 14.5914 30.0569"
                  stroke="black"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* SKILLS CONTAINER */}

          <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
            {/* {SKILL TITLE} */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 1 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* {SKILL LIST} */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 1 }}
              className="flex-wrap flex gap-4 items-center"
            >
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                JavaScript
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                Framer Motion
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                ExpressJS
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                NodeJS
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                MongoDB
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                ReactJS
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                NextJS
              </div>
              <div
                className="rounded  p-2 text-sm cursor-pointer
               bg-black text-white hover:bg-white
                hover:text-black"
              >
                TailwindCSS
              </div>
            </motion.div>
            {/* {SKILL SCROLL SVG} */}
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:flex-1 sticky  top-0 z-40">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
