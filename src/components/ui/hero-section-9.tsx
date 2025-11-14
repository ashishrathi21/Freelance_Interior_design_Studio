import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { InteractiveHoverButton } from "./interactive-hover-button";
import React from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: string;
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSection = ({ title, subtitle, images, className }: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "w-full overflow-hidden bg-gradient-to-b from-black via-neutral-800 to-neutral-950 px-6 py-16 sm:px-10 md:px-12 lg:px-20",
        className
      )}
    >
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

        {/* LEFT SIDE — TEXT */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base sm:text-lg text-gray-300"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            <InteractiveHoverButton text="View Our Work" />
            <InteractiveHoverButton text="Consultation" />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — IMAGES */}
        <motion.div
          className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating bubbles */}
          <motion.div
            className="absolute top-4 left-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-500/40"
            variants={floatingVariants}
            animate="animate"
          />

          <motion.div
            className="absolute bottom-10 right-6 h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-purple-500/40"
            variants={floatingVariants}
            animate="animate"
          />

          <motion.div
            className="absolute bottom-1/3 left-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-green-500/40"
            variants={floatingVariants}
            animate="animate"
          />

          {/* Main images */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 sm:left-[30%] h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-2xl bg-gray-300 p-2 shadow-xl"
            variants={imageVariants}
          >
            <img src={images[0]} className="h-full w-full rounded-xl object-cover" />
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/3 h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-2xl bg-gray-300 p-2 shadow-xl"
            variants={imageVariants}
          >
            <img src={images[1]} className="h-full w-full rounded-xl object-cover" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 sm:bottom-[20%] h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-2xl bg-gray-300 p-2 shadow-xl"
            variants={imageVariants}
          >
            <img src={images[2]} className="h-full w-full rounded-xl object-cover" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
