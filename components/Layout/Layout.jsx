import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import MyHead from "../MyHead";
import Footer from "../Footer";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <MyHead title={title} description={description} />
      <Navbar />
      <main style={{ marginBottom: 20 }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="page-transition-container"
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
