"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

export default function Transition({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ x: 1, opacity: 0.7 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0.7 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
