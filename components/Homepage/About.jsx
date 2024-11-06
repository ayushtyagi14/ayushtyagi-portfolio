import React from "react";
import Button from "../Button";
import Image from "next/image";

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
    <div className="bg-white mt-20" id="about">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-20 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-full gap-10">
            <div className="flex flex-col md:items-start items-center gap-5">
              <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
                About
              </span>
              <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold">
                More About Me
              </h1>
              <p className="text-[30px]">
                Hello! I am Ayush Tyagi, a versatile web developer hailing from
                New Delhi, deeply committed to my craft.
              </p>
              <p className="text-[17px]">
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
            <div className="flex lg:justify-end justify-center">
              <Image
                src="/images/aboutImg.png"
                alt="Ayush Tyagi Web Developer Frontend Developer"
                className="rounded-full border-4 border-black"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold">
              My Experiences
            </h1>
            <p className="md:text-[28px] text-center w-[80%] mx-auto mt-2 mb-5">
              I have had the pleasure to work with companies across a variety of
              industries. I am always interested in new, exciting and
              challenging adventures.
            </p>
            <Button
              url={"https://drive.google.com/file/d/1NETaWy8Dky1TlZE9bxu26Scbt6kQBStD/view?usp=sharing"}
              title={"My Resume"}
              outerWidth={"15em"}
            />
          </div>
          <div className="timeline-card-container-wrapper">
            <div className="timeline-card-container">
              {timeline.map((item) => (
                <div key={item.id} className="timeline-card">
                  <div className="flex flex-row items-center gap-5">
                    <div
                      className={`bg-[${item.color}] border-2 border-black rounded-full p-4`}
                    ></div>
                    <div className="flex flex-col">
                      <span className="text-center font-bold uppercase">
                        {item.duration}
                      </span>
                      <h1 className="my-2 font-dm font-bold">{item.company}</h1>
                      <p className="font-thin">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
