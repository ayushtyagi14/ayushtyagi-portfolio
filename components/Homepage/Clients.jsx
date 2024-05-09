import Image from "next/image";
import React, { useRef } from "react";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Clients = () => {
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
      stars: "⭐⭐⭐⭐⭐",
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
      stars: "⭐⭐⭐⭐⭐",
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
      stars: "⭐⭐⭐⭐⭐",
      visit: "https://yogayatra.in/",
    },
    {
      id: 4,
      company: "Tuffer",
      videoUrl:
        "https://res.cloudinary.com/dagkenafn/video/upload/v1693477233/tuffer_vs4lwf.mp4",
      review:
        "Ayush truly stands apart from other developers I've worked with. He has a great combination of speed, technical expertise, and design.  He is working on my recent project called 'Tuffer' and it's been an excellent experience so far. He understood the project really quickly and delivered a top-notch website within weeks. If you're looking for a developer who can turn your ideas into reality, I totally recommend him.",
      name: "Rachit Yadav",
      country: "/images/india.png",
      stars: "⭐⭐⭐⭐⭐",
      visit: "https://tuffer.vercel.app/",
    },
  ];

  return (
    <>
      <div
        className="text-white mt-20 flex flex-col items-center gap-4 w-[90%] mx-auto"
        id="testimonials"
      >
        <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
          Testimonials
        </span>
        <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold">
          Don&apos;t believe me ask them!
        </h1>
        <div className="flex lg:flex-row flex-col md:items-center items-end w-full">
          <img
            src={"/images/arrow-left.png"}
            width={50}
            className="custom-prev bg-[#AED6F1] rounded-full p-2 left-6 top-4 relative border-2 border-white cursor-pointer md:block hidden z-[900]"
          />
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={false}
            speed={1500}
            className="mySwiper w-full"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="border-2 border-white py-5 md:px-10 px-2 rounded-xl w-full mt-6 flex md:flex-row flex-col-reverse items-center"
                  key={item.id}
                >
                  <div className="flex flex-col items-center gap-4 md:w-[40%] mt-10 md:mt-0">
                    <h1 className="lg:text-[40px] text-[30px] text-center font-dm font-extrabold md:block hidden">
                      {item.company}
                    </h1>
                    <video
                      width={350}
                      height={350}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="mb-2 rounded-xl object-cover"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                    <Button
                      url={item.visit}
                      title={"Visit Site"}
                      outerWidth={"15em"}
                    />
                  </div>
                  <div className="flex flex-col md:gap-8 gap-2 items-center h-full justify-around md:w-[60%]">
                    <span>{item.stars}</span>
                    <p className="text-center md:text-[18px] font-dm font-thin">
                      {item.review}
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="flex flex-row items-center gap-2 md:text-[20px] font-bold font-dm">
                        {item.name}
                        <Image
                          src={item.country}
                          width={20}
                          height={20}
                          alt="Client's Country"
                        />
                      </span>
                      <span className="md:text-[20px] font-bold font-dm">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <img
            src={"/images/arrow-right.png"}
            width={50}
            className="custom-next bg-[#AED6F1] rounded-full p-2 relative right-6 top-4 border-2 border-white cursor-pointer md:block hidden z-[900]"
          />
          <div className="flex flex-row items-center mt-5 gap-1 md:hidden">
            <img
              src={"/images/arrow-left.png"}
              width={50}
              className="custom-prev bg-[#AED6F1] p-2 border-2 border-white cursor-pointer"
            />
            <img
              src={"/images/arrow-right.png"}
              width={50}
              className="custom-next bg-[#AED6F1] p-2 border-2 border-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
