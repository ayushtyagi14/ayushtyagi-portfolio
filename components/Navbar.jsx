import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full flex flex-row justify-between items-center px-10 pt-4 pb-5 text-white border-b-2 fixed top-0 z-[999] bg-[#2b2a2b]">
        <Image
          width={160}
          height={160}
          src={"/images/logo.png"}
          alt="Ayush Tyagi Web Developer"
        />
        <div className="lg:flex flex-row items-center gap-8 hidden">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#testimonial" className="hover:text-gray-300">
            Testimonial
          </Link>
          <Link href="#work" className="hover:text-gray-300">
            Work
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="lg:flex hidden flex-row items-center gap-3">
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
        <div className="lg:hidden block">
          <input
            hidden
            className="check-icon"
            id="check-icon"
            name="check-icon"
            type="checkbox"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <label className="icon-menu" htmlFor="check-icon">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </label>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-[#2b2a2b] w-[90%] mx-5 md:mx-9 border-2 border-white fixed top-[88px] z-[999] py-4 text-white text-center flex flex-col items-center gap-10"
          >
            <div className="flex flex-col items-center gap-2">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="#services" className="hover:text-gray-300">
                Services
              </Link>
              <Link href="#about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="#testimonial" className="hover:text-gray-300">
                Testimonial
              </Link>
              <Link href="#work" className="hover:text-gray-300">
                Work
              </Link>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
