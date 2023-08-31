import React from "react";
import Image from "next/image";
import Button from "../Button";

const Work = () => {
  const work = [
    {
      id: 1,
      title: "ShirtX Customizer Website",
      videoUrl:
        "https://res.cloudinary.com/dagkenafn/video/upload/v1693477219/shirtx_fqwiit.mp4",
      description:
        "ShirtX is a dynamic website built with Vite and Node.js, featuring a 3D t-shirt model that allows users to customize their shirts with logos and graphics. Powered by Dall-e OpenAI integration, it enables AI-generated logo and graphic creation. Explore limitless possibilities in shirt customization.",
      techstack: ["Vite", "NodeJs", "ThreeJs", "TailwindCSS"],
      visit: "https://shirtx.vercel.app/",
      code: "https://github.com/ayushtyagi14/shirtx",
    },
    {
      id: 2,
      title: "ThoughtSpot Posts Website",
      videoUrl:
        "https://res.cloudinary.com/dagkenafn/video/upload/v1693477219/thoughtspot_m3hi0z.mp4",
      description:
        "This is a social interaction website that is fully functional and responsive. The app includes Google Authorization via Firebase. The site allows you to post any post, leave comments on other people's posts, and interact with other users. The website is built using NextJS and the database and authorization are handled by Firebase.",
      techstack: ["NextJs", "Firebase", "TailwindCSS", "GoogleAuth"],
      visit: "https://thought-spot.vercel.app/",
      code: "https://github.com/ayushtyagi14/ThoughtSpot",
    },
    {
      id: 3,
      title: "Admin Dashboard Website",
      videoUrl:
        "https://res.cloudinary.com/dagkenafn/video/upload/v1693477231/dashboard_yme1dx.mp4",
      description:
        "This is an Admin Panel Website that is fully responsive and fully functional. A dashboard, three pages, four apps, and seven fully functional charts are included in this admin panel. ReactJS is used to build this website, as well as syncfusion to build all the chart components.",
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
        "This is a fully functional Ecommerce Website where you can seamlessly select and add items to your cart, and then proceed to a secure and efficient payment process. Developed using NextJs offers a smooth and engaging browsing experience. Powered by Stripe, ensuring the highest transaction security.",
      techstack: ["NextJs", "TailwindCSS", "Sanity CMS", "Stripe Payments"],
      visit: "https://basshub-ecommerce.vercel.app/",
      code: "https://github.com/ayushtyagi14/basshub_ecommerce",
    },
  ];

  return (
    <div className="mt-20 w-[90%] mx-auto" id="work">
      <div className="flex flex-col items-center gap-5">
        <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
          My Works
        </span>
        <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold text-white md:w-[70%]">
          Check out some of my portfolio with creative ideas and design.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 text-white mt-20">
        {work.map((item) => (
          <div className="flex flex-col items-center gap-8" key={item.id}>
            <video
              width={600}
              height={600}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl border-2 border-white p-1 object-cover"
            >
              <source src={item.videoUrl} type="video/mp4" />
            </video>
            <h1 className="lg:text-[30px] text-[26px] text-center font-bold text-white">
              {item.title}
            </h1>
            <p className="font-dm font-thin">{item.description}</p>
            <div className="flex lg:flex-row flex-col gap-5 lg:items-center items-start justify-between w-[90%] mt-4">
              <Button url={item.visit} title={"Visit"} outerWidth={"15em"} />
              <Button url={item.code} title={"Code"} outerWidth={"15em"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
