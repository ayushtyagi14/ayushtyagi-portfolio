"use client";
import React from "react";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Performance Optimization",
    description:
      "Enhance your website's speed and performance through advanced optimization techniques. Shorten loading times, reduce bounce rates, and provide users with a seamless and satisfying browsing experience.",
    color: "bg-[#e3e3ff]",
    chip: "Lighthouse • Core Web Vitals",
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    description:
      "Elevate your online presence with strategic SEO implementation. Improve organic search rankings, boost website visibility, and attract targeted traffic, ultimately driving meaningful conversions for your business.",
    color: "bg-[#f3ffe3]",
    chip: "On‑page • Technical",
  },
  {
    id: 3,
    title: "UI/UX Design Enhancement",
    description:
      "Elevate user engagement with captivating UI/UX design. Craft visually pleasing layouts, intuitive navigation, and delightful interactions that resonate with visitors, fostering lasting connections and memorable online experiences.",
    color: "bg-[#fde4f9]",
    chip: "Wireframes • Micro‑interactions",
  },
  {
    id: 4,
    title: "E-commerce Integration",
    description:
      "Seamlessly transition your business into the digital marketplace. Implement secure and efficient e-commerce solutions, empowering you to showcase your products or services online, reach a wider audience, and facilitate seamless transactions for optimal growth.",
    color: "bg-[#e3f2ff]",
    chip: "Checkout • Payments",
  },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const Service = () => {
  // pointer glow per-card
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.currentTarget.style.setProperty("--px", `${x}px`);
    e.currentTarget.style.setProperty("--py", `${y}px`);
  };

  return (
    <section id="services" className="relative mt-10 bg-[#f5f4f2]">
      {/* Background: diagonal beams + grain */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08] [background:linear-gradient(110deg,rgba(0,0,0,0.08)_0%,transparent_30%,rgba(0,0,0,0.08)_60%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[46%] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 mix-blend-multiply opacity-[0.03] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22%23ffffff%22/><circle cx=%222%22 cy=%222%22 r=%221%22 fill=%22%23000000%22 opacity=%220.4%22/></svg>')]" />
      </div>

      <div className="w-[90%] mx-auto py-20">
        {/* Header row */}
        <div className="flex flex-col items-center gap-6">
          <span
            className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase shadow-[0_6px_22px_rgba(174,214,241,0.35)]`}
          >
            My Services
          </span>
          <p className="lg:text-[50px] md:text-[40px] text-[28px] text-center leading-tight md:w-[80%] font-extrabold text-[#2b2b2b]">
            The service I offer is specifically designed to meet your needs.
          </p>
        </div>

        {/* Diagonal stack grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((item, i) => (
            <motion.article
              key={item.id}
              variants={card}
              onMouseMove={handleMove}
              className={`group relative overflow-hidden rounded-2xl border-2 border-[#2b2b2b] ${item.color}`}
            >
              {/* Slanted top band */}
              <div
                className={`absolute -top-10 ${
                  i % 2
                    ? "right-[-18%] rotate-[8deg]"
                    : "left-[-18%] -rotate-[8deg]"
                } h-20 w-[60%] min-w-[320px] rounded-2xl bg-[#2b2b2b]/10 border border-[#2b2b2b]/20`}
              />
              {/* Pointer-reactive glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "radial-gradient(240px 160px at var(--px,50%) var(--py,0%), rgba(255,255,255,0.22), transparent 60%)",
                }}
              />

              {/* Inner surface */}
              <div className="relative p-6 md:p-7">
                {/* Chip row */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 text-[#2b2b2b] border border-[#2b2b2b]/20 px-3 py-1 text-[11px] md:text-[12px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2b2b2b]" />
                    {item.chip}
                  </span>
                  {/* tiny pulse dot */}
                  <span className="h-2 w-2 rounded-full bg-[#2b2b2b] animate-pulse" />
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#2b2b2b]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[#2b2b2b]/80">{item.description}</p>

                {/* Bottom rail */}
                <div className="mt-6 flex items-center justify-between">
                  {/* <span className="text-[12px] text-[#2b2b2b]/70">
                    Crafted delivery
                  </span> */}
                  <span className="inline-block h-[2px] w-28 bg-[linear-gradient(90deg,rgba(0,0,0,0.45),transparent)] rounded-full" />
                </div>
              </div>

              {/* Lift on hover */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Section underline accent */}
        <div className="mt-12 h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.35),transparent)]" />
      </div>
    </section>
  );
};

export default Service;
