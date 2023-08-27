import React from "react";
import Contact from "./Homepage/Contact";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[#AED6F1] absolute w-full lg:h-screen h-[70vh] transform lg:translate-y-[50%] md:translate-y-[40%] translate-y-[50%]"></div>
        <div className="absolute inset-0">
          <Contact />
          <div className="bg-[#aed6f1]">
            <div className="md:w-[80%] w-[90%] mx-auto py-10 flex flex-col items-center gap-5">
              <div className="flex flex-row items-center w-full justify-between">
                <h1 className="text-[34px] uppercase">Ayush</h1>
                <a href="mailto:hello@ayushtyagi.com">
                  hello@ayushtyagi.com
                </a>
              </div>
              <div className="flex flex-row items-center w-full justify-between">
                <p className="text-[24px]">© Ayush Tyagi</p>
                <div className="lg:flex flex-row items-center gap-3">
                  <Button
                    title={"/images/twitter-logo.png"}
                    image={true}
                    url={"https://twitter.com/ayushhtyagi"}
                  />
                  <Button
                    title={"/images/linkedin-logo.png"}
                    image={true}
                    url={"https://www.linkedin.com/in/ayush-tyagi-77b974145/"}
                  />
                  <Button
                    title={"/images/github-logo.png"}
                    image={true}
                    url={"https://github.com/ayushtyagi14"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
