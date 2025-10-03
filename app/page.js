"use client";

import Hero from '../components/Homepage/Hero'
import Service from '../components/Homepage/Service'
import Clients from '../components/Homepage/Clients'
import About from '../components/Homepage/About'
import Work from '../components/Homepage/Work'
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        id="page-transition-container"
        className="overflow-hidden"
      >
        <Hero />
        <Service />
        <Clients />
        <About />
        <Work />
      </motion.div>
    </>
  )
}
