"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    {
      id: 1,
      company: "Gravitas AI",
      position: "Frontend Developer Intern",
      duration: "June 2022 - October 2023",
      content:
        "I am working as a Frontend developer intern at Gravitas AI. I have worked on the frontend of their website and also developed some new skills.",
      color: "#AED6F1",
    },
    {
      id: 2,
      company: "Jugadu IN",
      position: "Frontend Developer Intern",
      duration: "October 2022 - Jan 2023",
      content:
        "I have worked as a Frontend developer intern at Jugadu IN. I have worked on the frontend of their website and also developed some new skills.",
      color: "#f3ffe3",
    },
  ];

  return (
    <section className="bg-white mt-20" id="about">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-20 py-16">
          {/* Top: bio split with avatar card */}
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-full gap-10">
            <div className="flex flex-col md:items-start items-center gap-5">
              <span
                className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase`}
              >
                About
              </span>
              <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center md:text-left font-bold text-[#2b2b2b]">
                More About Me
              </h1>
              <p className="text-[30px] text-[#2b2b2b] text-center md:text-left">
                Hello! I am Ayush Tyagi, a versatile web developer hailing from
                New Delhi, deeply committed to my craft.
              </p>
              <p className="text-[17px] text-[#2b2b2b]/90 text-center md:text-left">
                With over three years of hands-on experience in the world of web
                development, including more than 1.5 years as a dedicated
                frontend developer intern, I&apos;ve had the privilege of
                collaborating with a diverse array of clients, both within India
                and on the international stage. Beyond my professional journey,
                I am the co-founder of my own startup company, GoldenStep, which
                has enriched my understanding of the intricacies of the business
                world.
                <br />
                <br /> At just 20 years of age, I bring a unique blend of
                youthful enthusiasm and industry knowledge to every project,
                driven by a passion for crafting exceptional digital solutions
                that make an impact.
              </p>
            </div>

            {/* Avatar glass card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex lg:justify-end justify-center"
            >
              <div className="relative rounded-3xl p-2 bg-[#2b2b2b] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-[#2b2b2b]">
                <div className="relative overflow-hidden rounded-[1.4rem] border-4 border-black bg-white">
                  <Image
                    src="/images/heroImg2.jpeg"
                    alt="Ayush Tyagi Web Developer Frontend Developer"
                    className="w-[360px] h-[360px] md:w-[400px] md:h-[400px] object-cover"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                {/* Soft conic ring */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-20 [background:conic-gradient(from_180deg_at_50%_50%,#00000022,transparent_30%,#00000011_60%,transparent_80%)]" />
              </div>
            </motion.div>
          </div>

          {/* Mid: Experience intro */}
          <div className="flex flex-col items-center">
            <h2 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold text-[#2b2b2b]">
              My Experiences
            </h2>
            <p className="md:text-[28px] text-center w-[90%] md:w-[80%] mx-auto mt-2 mb-5 text-[#2b2b2b]/90">
              I have had the pleasure to work with companies across a variety of
              industries. I am always interested in new, exciting and
              challenging adventures.
            </p>
            <Button
              url={
                "https://drive.google.com/file/d/1WbVLwjiRuxCve-xVPrKzFtNeZiWZJVPt/view?usp=sharing"
              }
              title={"My Resume"}
              outerWidth={"15em"}
            />
          </div>

          {/* Bottom: Radial timeline (unique, non-generic) */}
          <div className="relative">
            <div className="mx-auto w-full max-w-4xl">
              <ul className="relative grid grid-cols-1 gap-6">
                {/* Center spine */}
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#2b2b2b]/20" />
                {timeline.map((item, idx) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Node + spoke */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center ${
                        idx % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div
                        className="h-4 w-4 rounded-full border-2 border-black"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full md:w-[46%] rounded-2xl border-2 border-[#2b2b2b] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 ${
                        idx % 2 === 0 ? "md:ml-[6%]" : "md:mr-[6%]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-bold uppercase text-[#2b2b2b]">
                          {item.duration}
                        </span>
                        <span
                          className="inline-flex items-center gap-2 rounded-full border border-[#2b2b2b]/20 px-2.5 py-1 text-[11px] text-[#2b2b2b]"
                          style={{ backgroundColor: item.color }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2b2b2b]" />
                          {item.position}
                        </span>
                      </div>
                      <h3
                        className={`mt-2 ${dmSans.className} font-bold text-[18px] md:text-[20px] text-[#2b2b2b]`}
                      >
                        {item.company}
                      </h3>
                      <p className="mt-2 text-[#2b2b2b]/80 text-sm md:text-[15px]">
                        {item.content}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
