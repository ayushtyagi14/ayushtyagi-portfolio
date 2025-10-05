"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";
// lucide-react icons (install: npm i lucide-react)
import { Quote, Building2, Globe2, Link2 } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    company: "Riwaj Events",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1698527080/1698526891113636_wwtfrb.mp4",
    review:
      "Ayush has exceeded all our expectations with the website he designed for Riwaj Events. His talent in capturing the essence of our event and wedding management company was evident in every aspect of the site. Ayush's dedication to delivering a user-friendly, visually stunning platform was truly impressive. He demonstrated unwavering professionalism and efficiency throughout the project, making our collaboration a breeze. We highly recommend Ayush for anyone looking to elevate their business online. Thanks to Ayush, we now have a website that perfectly complements our business!",
    name: "Irteza Tariq",
    country: "/images/usa.png",
    visit: "https://riwaj.events/",
  },
  {
    id: 2,
    company: "EMS Xperience",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477224/ems_tpllyp.mp4",
    review:
      "Working with Ayush on our EMS Xperience project has been a game-changer. His dedication and passion for our brand's vision were truly remarkable. Ayush turned our ideas into a stunning website that perfectly reflects our commitment to health and fitness. His attention to detail and creative flair brought our products to life online. We are extremely satisfied with the outcome and couldn't have asked for a better web developer. Thank you, Ayush!",
    name: "Sascha",
    country: "/images/spain.png",
    visit: "https://ems-xperience.com/",
  },
  {
    id: 3,
    company: "Yogayatra",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477236/yogayatra_q5p2ar.mp4",
    review:
      "Hi Ayush, you have been phenomenal. Your unwavering support and exceptional work have transformed our online presence. I truly appreciate your expertise, timely delivery, and clear communication. Thank you for your invaluable contributions!",
    name: "Giri",
    country: "/images/india.png",
    visit: "https://yogayatra.in/",
  },
  {
    id: 4,
    company: "Tuffer",
    videoUrl:
      "https://res.cloudinary.com/dagkenafn/video/upload/v1693477233/tuffer_vs4lwf.mp4",
    review:
      "Ayush truly stands apart from other developers I've worked with. He has a great combination of speed, technical expertise, and design. He is working on my recent project called 'Tuffer' and it's been an excellent experience so far. He understood the project really quickly and delivered a top-notch website within weeks. If you're looking for a developer who can turn your ideas into reality, I totally recommend him.",
    name: "Rachit Yadav",
    country: "/images/india.png",
    visit: "https://tuffer.vercel.app/",
  },
];

const Clients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="text-white mt-20 w-[90%] mx-auto relative"
      id="testimonials"
    >
      {/* Background: vertical glow bands + soft grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.08] [background:linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.10)_70%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-[0.04] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22%23000%22/><circle cx=%222%22 cy=%222%22 r=%221%22 fill=%22%23ffffff%22 opacity=%220.45%22/></svg>')]" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center gap-4">
        <span
          className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase`}
        >
          Testimonials
        </span>
        <h2 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold">
          Don&apos;t believe me ask them!
        </h2>
      </div>

      {/* Custom nav over slider */}
      <div className="relative mt-6">
        {/* Arrows pinned to slide middle edges */}
        <button
          ref={prevRef}
          aria-label="Previous testimonial"
          className="group absolute z-20 left-0 md:-left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#AED6F1] p-2 shadow-md"
        >
          <Image
            src="/images/arrow-left.png"
            width={32}
            height={32}
            alt="Previous"
            className="pointer-events-none"
          />
        </button>
        <button
          ref={nextRef}
          aria-label="Next testimonial"
          className="group absolute z-20 right-0 md:-right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#AED6F1] p-2 shadow-md"
        >
          <Image
            src="/images/arrow-right.png"
            width={32}
            height={32}
            alt="Next"
            className="pointer-events-none"
          />
        </button>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          spaceBetween={24}
          slidesPerView={1}
          loop
          speed={800}
          className="relative"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Anchor for arrows relative to each slide card */}
              <div className="relative max-w-screen-lg mx-auto">
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl border-2 border-white/80 bg-white/5 backdrop-blur-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  {/* Top: video */}
                  <motion.div
                    initial={{ scale: 0.985, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-3 md:p-4"
                  >
                    <video
                      width={840}
                      height={540}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="mx-auto aspect-video rounded-2xl object-cover border border-white/20"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                  </motion.div>

                  {/* Bottom: content */}
                  <div className="px-5 md:px-8 pb-7">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/70 text-[#2b2b2b] border border-[#2b2b2b]/20 px-3 py-1 text-[12px] font-semibold">
                        <Building2 size={16} className="text-[#2b2b2b]" />
                        {item.company}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-3 py-1 text-[12px]">
                        <Globe2 size={16} />
                        <Image
                          src={item.country}
                          width={16}
                          height={16}
                          alt="Country"
                          className="rounded-full"
                        />
                      </span>
                      <a
                        href={item.visit}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#AED6F1] text-[#2b2b2b] border-2 border-white px-3 py-1 text-[12px] font-semibold hover:opacity-90 transition"
                      >
                        <Link2 size={16} className="text-[#2b2b2b]" />
                        Visit Site
                      </a>
                    </div>

                    {/* Quote */}
                    <div className="mt-6 grid grid-cols-[auto,1fr] gap-3 md:gap-4 items-start">
                      <div className="mt-1">
                        <Quote size={22} className="text-white/70" />
                      </div>
                      <blockquote
                        className={`text-[15px] md:text-[18px] ${dmSans.className} font-thin text-white/90`}
                      >
                        “{item.review}”
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/30">
                        <Image
                          src={item.country}
                          width={32}
                          height={32}
                          alt="Country"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[16px] md:text-[18px] font-bold ${dmSans.className}`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`text-[13px] md:text-[14px] text-white/70 ${dmSans.className}`}
                        >
                          {item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile inline nav fallback */}
      <div className="flex md:hidden justify-center gap-3 mt-5">
        <button
          onClick={() => prevRef.current?.click()}
          className="rounded-md bg-[#AED6F1] p-2 border-2 border-white"
          aria-label="Previous testimonial"
        >
          <Image
            src="/images/arrow-left.png"
            width={32}
            height={32}
            alt="Previous"
          />
        </button>
        <button
          onClick={() => nextRef.current?.click()}
          className="rounded-md bg-[#AED6F1] p-2 border-2 border-white"
          aria-label="Next testimonial"
        >
          <Image
            src="/images/arrow-right.png"
            width={32}
            height={32}
            alt="Next"
          />
        </button>
      </div>
    </section>
  );
};

export default Clients;
