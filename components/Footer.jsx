"use client";
import React from "react";
import Contact from "./Homepage/Contact";
import Button from "./Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-28">
      {/* Grand backdrop: layered wave + grid glow */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* base sky */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-[#AED6F1]" />
        {/* sweeping light band */}
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(1200px_360px_at_50%_0%,#ffffff,transparent_60%)]" />
        {/* faint grid */}
        <div className="absolute inset-0 opacity-10 [background:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Elevated Contact */}
      <div className="relative -translate-y-4">
        <Contact />
      </div>

      {/* Info bar with split rails */}
      <div className="relative bg-[#aed6f1]">
        {/* rails */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(0,0,0,0.18),transparent,rgba(0,0,0,0.18))]" />
        <div className="md:w-[80%] w-[90%] mx-auto py-8 md:py-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center items-start w-full justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  width={160}
                  height={160}
                  src={"/images/logo.png"}
                  alt="Ayush Tyagi Web Developer"
                  className="h-8 w-auto sm:h-9"
                />
                {/* Subtle glow */}
                <span className="pointer-events-none absolute -inset-2 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors"></span>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden md:inline-block text-xs tracking-[0.22em] uppercase text-white/70"
              >
                Portfolio
              </motion.span>
            </Link>
            <a
              href="mailto:hello@ayushtyagi.com"
              className="text-[#2b2b2b] underline underline-offset-4 decoration-[#2b2b2b]/60 hover:decoration-2"
            >
              hello@ayushtyagi.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center items-start w-full justify-between gap-4">
            <p className="text-[16px] md:text-[20px] text-[#2b2b2b]">
              © Ayush Tyagi
            </p>

            {/* Social rail with capsules */}
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white/70 border border-[#2b2b2b]/20 px-2 py-1 text-[#2b2b2b] text-xs">
                Connect
              </div>
              <div className="flex flex-row items-center gap-3">
                <Button
                  title={"/images/twitter-logo.png"}
                  image={true}
                  url={"https://twitter.com/ayushhtyagi"}
                />
                <Button
                  title={"/images/linkedin-logo.png"}
                  image={true}
                  url={"https://www.linkedin.com/in/ayush-tyagi-77b974145/"}
                />
                <Button
                  title={"/images/github-logo.png"}
                  image={true}
                  url={"https://github.com/ayushtyagi14"}
                />
              </div>
            </div>
          </div>

          {/* bottom hairline */}
          <div className="h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.18),transparent,rgba(0,0,0,0.18))]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
