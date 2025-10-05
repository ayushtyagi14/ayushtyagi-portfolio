"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";

const work = [
  {
    id: 1,
    title: "Gatherly Social Media App",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1699982133/gatherly_hm7ipb.mp4",
    description:
      "Gatherly, a dynamic social media website reminiscent of Instagram, boasts a tech-savvy stack comprising React and Typescript for the frontend, ensuring a sleek and responsive user interface. The backend and database storage are expertly handled by Appwrite, offering a robust foundation for seamless data management and retrieval. Users can effortlessly create accounts, share vivid moments with details like captions and locations, and explore a captivating infinite-scrolling explore page.",
    techstack: ["ReactJs", "Typescript", "TailwindCSS", "Appwrite"],
    visit: "https://gatherly-app.vercel.app/",
    code: "https://github.com/ayushtyagi14/gatherly",
  },
  {
    id: 2,
    title: "ShirtX Customizer Website",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477219/shirtx_fqwiit.mp4",
    description:
      "ShirtX, an innovative website crafted with Vite and Node.js, introduces a dynamic experience in the realm of online fashion. Central to its uniqueness is a 3D t-shirt model, inviting users to personalize their shirts with logos and graphics.ShirtX seamlessly integrates with DALL-E OpenAI, unleashing the power of AI-generated logo and graphic creation. This synergy of Vite, Node.js, ThreeJs and OpenAI brings forth a platform that transcends conventional shirt customization, offering users a limitless canvas for creative expression.",
    techstack: ["Vite", "NodeJs", "ThreeJs", "TailwindCSS"],
    visit: "https://shirtx.vercel.app/",
    code: "https://github.com/ayushtyagi14/shirtx",
  },
  {
    id: 3,
    title: "Admin Dashboard Website",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477231/dashboard_yme1dx.mp4",
    description:
      "This Admin Panel Website sets a new standard with its full responsiveness and functionality. Powered by ReactJS, it encompasses a comprehensive dashboard, three pages, and four apps, ensuring a seamless user experience. Elevating data visualization, the panel integrates seven fully functional charts, all meticulously crafted using Syncfusion components. The combination of ReactJS and Syncfusion empowers the admin panel with a powerful and dynamic interface, delivering a robust solution for efficient data management and visualization.",
    techstack: ["ReactJs", "TailwindCSS", "Syncfusion", "JavaScript"],
    visit: "https://admin-dashboard-ayushtyagi14.vercel.app/",
    code: "https://github.com/ayushtyagi14/admin-dashboard",
  },
  {
    id: 4,
    title: "BassHub Ecommerce Website",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477226/basshub_we0ow2.mp4",
    description:
      "Embark on a seamless shopping journey with our fully functional Ecommerce Website. Crafted with NextJs, it provides a smooth and engaging browsing experience, allowing users to effortlessly select and add items to their cart. The platform prioritizes security, integrating Stripe for a secure and efficient payment process. With a user-friendly interface and robust backend, our Ecommerce Website not only simplifies the shopping experience but also guarantees the highest transaction security, ensuring a confident and enjoyable online shopping venture for every user.",
    techstack: ["NextJs", "TailwindCSS", "Sanity CMS", "Stripe Payments"],
    visit: "https://basshub-ecommerce.vercel.app/",
    code: "https://github.com/ayushtyagi14/basshub_ecommerce",
  },
];

const reelVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const Work = () => {
  return (
    <section className="mt-20 w-[90%] mx-auto" id="work">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 text-white">
        <span
          className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase`}
        >
          My Works
        </span>
        <h2 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold md:w-[70%]">
          Check out some of my portfolio with creative ideas and design.
        </h2>
      </div>

      {/* Mosaic reels */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {work.map((item, idx) => (
          <motion.article
            key={item.id}
            variants={reelVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className={`relative rounded-3xl border-2 border-white/70 bg-white/5 backdrop-blur-sm text-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${
              idx % 2 === 1 ? "md:translate-y-6" : ""
            }`}
          >
            {/* Video header with soft mask */}
            <div className="p-2 md:p-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/20">
                <video
                  width={800}
                  height={450}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent,rgba(0,0,0,0.35))]" />
              </div>
            </div>

            {/* Content body */}
            <div className="px-5 md:px-6 pb-6">
              {/* Title row with subtle accent */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="lg:text-[30px] text-[24px] font-bold">
                  {item.title}
                </h3>
                <span className="hidden md:block h-[2px] w-24 bg-gradient-to-r from-white/60 to-transparent rounded-full" />
              </div>

              {/* Description */}
              <p
                className={`${dmSans.className} font-light leading-6 text-[14px] md:text-[15px] mt-3 text-white/90`}
              >
                {item.description}
              </p>

              {/* Tech chips */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {item.techstack?.map((t, i) => (
                  <span
                    key={`${item.id}-${t}-${i}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[12px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5">
                <div className="flex flex-row justify-between w-full">
                  <Button
                    url={item.visit}
                    title={"Visit"}
                    outerWidth={"15em"}
                  />
                  <Button url={item.code} title={"Code"} outerWidth={"15em"} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Work;
