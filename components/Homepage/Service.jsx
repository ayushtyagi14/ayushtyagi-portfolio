import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Performance Optimization",
      description:
        "Enhance your website's speed and performance through advanced optimization techniques. Shorten loading times, reduce bounce rates, and provide users with a seamless and satisfying browsing experience.",
      color: "#e3e3ff",
    },
    {
      id: 2,
      title: "Search Engine Optimization (SEO)",
      description:
        "Elevate your online presence with strategic SEO implementation. Improve organic search rankings, boost website visibility, and attract targeted traffic, ultimately driving meaningful conversions for your business.",
      color: "#f3ffe3",
    },
    {
      id: 3,
      title: "UI/UX Design Enhancement",
      description:
        "Elevate user engagement with captivating UI/UX design. Craft visually pleasing layouts, intuitive navigation, and delightful interactions that resonate with visitors, fostering lasting connections and memorable online experiences.",
      color: "#fde4f9",
    },
    {
      id: 4,
      title: "E-commerce Integration",
      description:
        "Seamlessly transition your business into the digital marketplace. Implement secure and efficient e-commerce solutions, empowering you to showcase your products or services online, reach a wider audience, and facilitate seamless transactions for optimal growth.",
      color: "#e3f2ff",
    },
  ];

  return (
    <>
      <div
        className="mt-10 border-y-2 border-white py-20 bg-[#f5f4f2]"
        id="services"
      >
        <div className="flex flex-col items-center w-[90%] mx-auto gap-6">
          <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
            My Services
          </span>
          <p className="lg:text-[50px] md:text-[40px] text-[28px] text-center leading-tight md:w-[80%] font-extrabold">
            The service I offer is specifically designed to meet your needs.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16 mt-10">
            {services.map((item) => (
              <div
                className={`flex flex-col items-start gap-4 border-2 border-[#2b2b2b] rounded-xl px-4 py-8 bg-[${item.color}]`}
                key={item.id}
              >
                <h1 className="text-[24px] font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
