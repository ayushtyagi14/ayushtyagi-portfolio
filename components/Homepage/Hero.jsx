import React from "react";
import Button from "../Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:mt-[90px] mt-[10px] text-white py-10 w-[90%] mx-auto">
      <div className="mt-20 flex lg:flex-row flex-col items-center">
        <div>
          <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-white text-[#2b2b2b] rounded-full font-dm font-extrabold">
            HELLO!
          </span>
          <p className="lg:text-[70px] md:text-[50px] text-[40px] mt-8 leading-tight font-bold">
            I am Ayush Tyagi, <br /> a web developer
          </p>
          <p className="md:text-[24px] lg:w-[60%] w-full mt-8 mb-12 font-thin">
            Passionate about turning your digital dreams into reality, one line
            of code at a time
          </p>
          <div className="flex md:flex-row flex-col md:items-center items-start md:gap-8 gap-6">
            <Button
              url={"#contact"}
              title={"Let's Connect!"}
              outerWidth={"15em"}
            />
            <Button
              url={"https://drive.google.com/file/d/1nNcHopiFVDLZUEPKOu8EQp9C3gOcOJu4/view?usp=sharing"}
              title={"My Resume"}
              outerWidth={"15em"}
            />
          </div>
        </div>
        <div>
          <Image
            src="/images/heroImg2.jpeg"
            alt="Ayush Tyagi Web Developer Frontend Developer"
            className="rounded-t-full border-4 border-black lg:mt-0 mt-10"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
