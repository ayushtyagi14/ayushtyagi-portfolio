"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";

const chipVariants = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.18 + i * 0.08,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const floatVariants = {
  animate: (offset = 8) => ({
    y: [0, -offset, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  }),
};

const Hero = () => {
  return (
    <section className="relative text-white w-[90%] mx-auto md:mt-[90px] mt-[10px] py-14">
      {/* New background scheme: diagonal beams + soft noise */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.10] [background:linear-gradient(115deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.0)_30%,rgba(255,255,255,0.08)_60%,rgba(255,255,255,0.0)_100%)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-[0.04] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22%23000%22/><circle cx=%222%22 cy=%222%22 r=%221%22 fill=%22%23ffffff%22 opacity=%220.45%22/></svg>')]" />
        <div
          className="absolute -top-16 right-10 h-72 w-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side, #AED6F1, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-10 h-64 w-64 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(closest-side, #ffffff, transparent)",
          }}
        />
      </div>

      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Left: copy */}
        <div className="relative">
          {/* Hello chip */}
          <motion.span
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className={`inline-flex items-center gap-2 ${dmSans.className} font-extrabold text-[#2b2b2b] bg-[#AED6F1] border-2 border-white rounded-full text-[18px] md:text-[20px] py-2 px-6 shadow-[0_6px_22px_rgba(174,214,241,0.35)]`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
            HELLO!
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-bold leading-tight"
          >
            <span className="block lg:text-[70px] md:text-[50px] text-[40px]">
              I am Ayush Tyagi,
            </span>
            <span className="block lg:text-[70px] md:text-[50px] text-[40px]">
              a web developer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="md:text-[24px] lg:w-[60%] w-full mt-6 mb-10 font-thin text-white/90"
          >
            Passionate about turning your digital dreams into reality, one line
            of code at a time
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
            className="flex md:flex-row flex-col md:items-center items-start md:gap-8 gap-6"
          >
            <Button
              url={"#contact"}
              title={"Let's Connect!"}
              outerWidth={"15em"}
            />
            <Button
              url={
                "https://drive.google.com/file/d/1WbVLwjiRuxCve-xVPrKzFtNeZiWZJVPt/view?usp=sharing"
              }
              title={"My Resume"}
              outerWidth={"15em"}
            />
          </motion.div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.28, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-[2px] w-full max-w-[460px] origin-left bg-gradient-to-r from-white/50 via-white/80 to-white/0"
          />
        </div>

        {/* Right: portrait with contextual chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          {/* Cinematic frame */}
          <div className="relative rounded-[1.8rem] p-[10px] bg-white/5 border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 rounded-[1.8rem] pointer-events-none [mask-image:radial-gradient(500px_260px_at_70%_20%,black,transparent)]" />
            <div className="relative overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/hero-image.jpg"
                alt="Ayush Tyagi Web Developer Frontend Developer"
                className="w-full h-auto object-cover"
                width={560}
                height={560}
                priority
              />
              {/* Subtle vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(0,0,0,0.35))]" />
            </div>
          </div>

          {/* Chips: adjust for a personal portrait */}
          <motion.div
            custom={0}
            variants={chipVariants}
            initial="initial"
            animate="animate"
            className="absolute -left-5 -top-6 hidden md:block"
          >
            <motion.div
              variants={floatVariants}
              animate={floatVariants.animate(10)}
              className="rounded-xl bg-[#AED6F1] text-[#2b2b2b] px-3 py-2 text-xs font-semibold border-2 border-white shadow-md"
            >
              Delhi, India
            </motion.div>
          </motion.div>

          <motion.div
            custom={1}
            variants={chipVariants}
            initial="initial"
            animate="animate"
            className="absolute -right-6 -top-4 hidden md:block"
          >
            <motion.div
              variants={floatVariants}
              animate={floatVariants.animate(7)}
              className="rounded-xl bg-[#2b2b2b] border border-white/20 text-white/90 px-3 py-2 text-xs shadow-lg"
            >
              Available for Projects
            </motion.div>
          </motion.div>

          <motion.div
            custom={2}
            variants={chipVariants}
            initial="initial"
            animate="animate"
            className="absolute -left-8 bottom-8 hidden md:block"
          >
            <motion.div
              variants={floatVariants}
              animate={floatVariants.animate(9)}
              className="rounded-xl bg-[#2b2b2b] border border-white/20 text-white/90 px-3 py-2 text-xs shadow-lg"
            >
              Next.js • React • UI
            </motion.div>
          </motion.div>

          <motion.div
            custom={3}
            variants={chipVariants}
            initial="initial"
            animate="animate"
            className="absolute -right-5 -bottom-5 hidden md:block"
          >
            <motion.div
              variants={floatVariants}
              animate={floatVariants.animate(6)}
              className="rounded-xl bg-[#AED6F1] text-[#2b2b2b] px-3 py-2 text-xs font-semibold border-2 border-white shadow-md"
            >
              4+ Years Experience
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
