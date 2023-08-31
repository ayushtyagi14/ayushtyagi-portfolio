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
      company: "Velvet and Rose",
      videoUrl: "https://res.cloudinary.com/dagkenafn/video/upload/v1693477311/velvetrose_vz9e2m.mp4",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa necessitatibus consectetur voluptate unde assumenda laudantium, omnis iusto labore, minus quasi, dolorum iure alias voluptatem eum! Placeat hic aut repellat non accusamus temporibus consequuntur",
      name: "Irteza Tariq",
      country: "/images/usa.png",
      stars: "⭐⭐⭐⭐",
    },
    {
      id: 2,
      company: "EMS Xperience",
      videoUrl: "https://res.cloudinary.com/dagkenafn/video/upload/v1693477224/ems_tpllyp.mp4",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa necessitatibus consectetur voluptate unde assumenda laudantium, omnis iusto labore, minus quasi, dolorum iure alias voluptatem eum! Placeat hic aut repellat non accusamus temporibus consequuntur",
      name: "Sascha",
      country: "/images/spain.png",
      stars: "⭐⭐⭐",
    },
    {
      id: 3,
      company: "Yogayatra",
      videoUrl: "https://res.cloudinary.com/dagkenafn/video/upload/v1693477236/yogayatra_q5p2ar.mp4",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa necessitatibus consectetur voluptate unde assumenda laudantium, omnis iusto labore, minus quasi, dolorum iure alias voluptatem eum! Placeat hic aut repellat non accusamus temporibus consequuntur",
      name: "Giri",
      country: "/images/india.png",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      company: "Tuffer",
      videoUrl: "https://res.cloudinary.com/dagkenafn/video/upload/v1693477233/tuffer_vs4lwf.mp4",
      review:
        "Ayush truly stands apart from other developers I've worked with. He has a great combination of speed, technical expertise, and design.  He is working on my recent project called 'Tuffer' and it's been an excellent experience so far. He understood the project really quickly and delivered a top-notch website within weeks. If you're looking for a developer who can turn your ideas into reality, I totally recommend him.",
      name: "Rachit Yadav",
      country: "/images/india.png",
      stars: "⭐⭐⭐⭐⭐",
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
                      url={"/"}
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
                        <Image src={item.country} width={20} height={20} alt="Client's Country" />
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
