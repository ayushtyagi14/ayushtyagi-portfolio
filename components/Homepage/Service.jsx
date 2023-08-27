import React from "react";

const Service = () => {
  return (
    <>
      <div className="mt-10 border-y-2 border-white py-20 bg-[#f5f4f2]" id="services">
        <div className="flex flex-col items-center w-[90%] mx-auto gap-6">
          <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
            My Services
          </span>
          <p className="lg:text-[50px] md:text-[40px] text-[28px] text-center leading-tight md:w-[80%] font-extrabold">
            The service I offer is specifically designed to meet your needs.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 mt-10">
            <div className="flex flex-col items-start gap-4 border-2 border-[#2b2b2b] rounded-xl px-4 py-8 bg-[#e3e3ff]">
              <h1 className="text-[24px] font-bold">Strategy & Planning</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci fugit blanditiis distinctio. Deserunt voluptatibus
                veniam saepe mollitia sunt, esse quaerat cum a aperiam fuga
                reiciendis ea veritatis aliquam maiores obcaecati?
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 border-2 border-[#2b2b2b] rounded-xl px-4 py-8 bg-[#f3ffe3]">
              <h1 className="text-[24px] font-bold">User Research</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci fugit blanditiis distinctio. Deserunt voluptatibus
                veniam saepe mollitia sunt, esse quaerat cum a aperiam fuga
                reiciendis ea veritatis aliquam maiores obcaecati?
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 border-2 border-[#2b2b2b] rounded-xl px-4 py-8 bg-[#fde4f9]">
              <h1 className="text-[24px] font-bold">Web Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci fugit blanditiis distinctio. Deserunt voluptatibus
                veniam saepe mollitia sunt, esse quaerat cum a aperiam fuga
                reiciendis ea veritatis aliquam maiores obcaecati?
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 border-2 border-[#2b2b2b] rounded-xl px-4 py-8 bg-[#e3f2ff]">
              <h1 className="text-[24px] font-bold">Brand Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci fugit blanditiis distinctio. Deserunt voluptatibus
                veniam saepe mollitia sunt, esse quaerat cum a aperiam fuga
                reiciendis ea veritatis aliquam maiores obcaecati?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
