import React from "react";
import Button from "../Button";

const About = () => {
  const timeline = [
    {
      id: 1,
      company: "Gravitas AI",
      position: "Frontend Developer Intern",
      duration: "June 2022 - Present",
      content:
        "I am working as a Frontend developer intern at Gravitas. I have worked on the frontend of their website and also developed some new",
      color: "#AED6F1",
    },
    {
      id: 2,
      company: "Jugadu IN",
      position: "Frontend Developer Intern",
      duration: "October 2022 - Jan 2023",
      content:
        "I am working as a Frontend developer intern at Gravitas. I have worked on the frontend of their website and also developed some new",
      color: "#f3ffe3",
    }
  ];

  return (
    <div className="bg-white mt-20" id="about">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-20 py-16">
          <div className="grid md:grid-cols-2">
            <div></div>
            <div className="flex flex-col md:items-start items-center gap-5">
              <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
                About
              </span>
              <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold">
                More About Me
              </h1>
              <p className="text-[28px]">
                Hello! I am Ayush Tyagi, a multidisciplinary product designer
                and developer based in London. I am very passionate about the
                work that I do.
              </p>
              <p className="text-[18px]">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh ut fermentum massa justo
                sit. <br />
                <br /> Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
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
            <Button url={"/"} title={"My Resume"} outerWidth={"15em"} />
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
