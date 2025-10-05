"use client";

import Hero from '../components/Homepage/Hero'
import Service from '../components/Homepage/Service'
import Clients from '../components/Homepage/Clients'
import About from '../components/Homepage/About'
import Work from '../components/Homepage/Work'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Clients />
      <About />
      <Work />
      <Footer />
    </>
  )
}
