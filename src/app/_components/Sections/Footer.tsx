"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import footerImg from "@/public/axtra/logo.png";

const Footer = () => {
  const text = "LET'S TALK";
  const letters = text.split("");

  // Colors for each letter (matching your original colors)
  const letterColors = [
    "#fbbf24", // yellow-400 for L
    "#f97316", // orange-500 for E
    "#ef4444", // red-500 for T
    "#ec4899", // pink-500 for '
    "#a855f7", // purple-500 for S
    "#ffffff", // white for space
    "#06b6d4", // cyan-500 for T
    "#ec4899", // pink-500 for A
    "#a855f7", // purple-500 for L
    "#8b5cf6", // violet-500 for K
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        damping: 8,
        stiffness: 100,
        duration: 1.2,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 p-4 lg:p-8">
          <div className="mb-8 lg:mb-12">
            <Image
              src="/axtra/logo.png"
              width={100}
              height={100}
              alt="Axtra"
              className="mx-auto lg:mx-0"
            />
            <p className="mt-4 text-gray-400 text-sm text-center lg:text-left">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <div className="w-full lg:w-32 border-t lg:border-t-0 border-l-0 lg:border-l border-r-0 lg:border-r border-b border-gray-800">
          <div className="flex lg:flex-col justify-center lg:justify-start h-full">
            <a
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Facebook
            </a>
            <a
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Twitter
            </a>
            <a
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Linkedin
            </a>
            <a
              href="#"
              className="flex-1 lg:flex-none text-center p-3 lg:p-4 hover:bg-gray-800 transition-colors py-4 lg:py-7"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-8 relative">
          <div className="flex items-center justify-center h-full py-8 lg:py-0">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-9xl font-semibold text-center whitespace-nowrap"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{
                    color: letterColors[index],
                    display: "inline-block",
                    transformOrigin: "center center",
                  }}
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.15, 1],
                    rotateZ: [0, 3, -3, 0],
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3 - 0.6,
                    repeatType: "loop",
                  }}
                  className="cursor-pointer"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 w-full bg-gray-900 border-t border-gray-800 py-6 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          <div className="text-sm text-gray-400 text-center lg:text-left">
            © 2022 - 2025 | Alrights reserved by Wealcoder
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8">
            <a href="/about" className="text-gray-400 hover:text-white">
              ABOUT US
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white">
              CONTACT
            </a>
            <a href="/career" className="text-gray-400 hover:text-white">
              CAREER
            </a>
            <a href="/faqs" className="text-gray-400 hover:text-white">
              FAQS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
