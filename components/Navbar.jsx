"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverX, setHoverX] = useState(0);
  const [hoverY, setHoverY] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route hash change for smoother UX
  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverX(e.clientX - rect.left);
    setHoverY(e.clientY - rect.top);
  };

  return (
    <div className="relative z-[999]">
      {/* App bar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0`}
      >
        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(43,42,43,0.75)"
              : "rgba(43,42,43,1)",
            backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
          }}
          className="mx-auto mt-3 mb-2 w-[min(1120px,94%)] rounded-2xl border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          style={{ willChange: "background-color,backdrop-filter" }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 text-white">
            {/* Brand */}
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

            {/* Desktop nav */}
            <nav
              className="relative hidden lg:flex items-center"
              onMouseMove={handleMouseMove}
            >
              {/* magnetic hover gradient */}
              <div
                className="pointer-events-none absolute -inset-x-6 -inset-y-3 rounded-full opacity-0 lg:group-hover:opacity-100"
                style={{
                  background: `radial-gradient(140px 60px at ${hoverX}px ${hoverY}px, rgba(255,255,255,0.08), transparent 60%)`,
                  transition: "opacity 300ms",
                }}
              />
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActive(item.href)}
                      onMouseLeave={() => setActive("")}
                      className="relative px-3 py-2 rounded-xl text-sm text-white/90 hover:text-white transition-colors"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <AnimatePresence>
                        {active === item.href && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-xl bg-white/5 border border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials desktop */}
            <div className="hidden lg:flex items-center gap-2">
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

            {/* Mobile menu button */}
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden relative group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-[#2b2a2b] text-white/90"
            >
              <span className="absolute inset-0 rounded-xl bg-white/0 group-active:bg-white/5 transition-colors" />
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-6 bg-white rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-6 bg-white rounded-full mt-1.5"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-6 bg-white rounded-full mt-1.5"
              />
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile command-palette menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[88px] backdrop-blur-md bg-[#2b2a2b]/80"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="mx-auto w-[min(760px,92%)] rounded-2xl border border-white/15 bg-[#2b2a2b]/90 text-white shadow-2xl"
            >
              {/* search-ish header strip */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_16px_3px_rgba(16,185,129,0.45)]" />
                <p className="text-xs tracking-wide text-white/70">Navigate</p>
              </div>

              <ul className="px-2 py-2">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.04 * idx, duration: 0.22 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-base">{item.label}</span>
                      <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">
                        ↵
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-white/10 px-3 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1.5 rounded-lg border border-white/15 text-xs text-white/80 hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
