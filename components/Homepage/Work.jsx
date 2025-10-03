import React from "react";
import Image from "next/image";
import Button from "../Button";
import { dmSans } from "../../app/layout";

const Work = () => {
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

  return (
    <div className="mt-20 w-[90%] mx-auto" id="work">
      <div className="flex flex-col items-center gap-5">
        <span
          className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase`}
        >
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
            <p
              className={`${dmSans.className} font-light w-[90%] leading-6 text-[14px]`}
            >
              {item.description}
            </p>
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
