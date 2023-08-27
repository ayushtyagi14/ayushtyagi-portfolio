import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbgnaz");

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state.succeeded]);

  return (
    <div className="mt-20 pt-10" id="contact">
      <div className="md:w-[80%] w-[90%] mx-auto border-2 border-[#2b2b2b] bg-white rounded-xl py-10">
        <div className="flex flex-col items-center md:pb-20 pb-10 gap-8">
          <span className="bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full font-dm font-extrabold uppercase">
            Contact Me
          </span>
          <h1 className="lg:text-[50px] md:text-[40px] text-[26px] text-center font-bold md:w-[70%] leading-none">
            Got a project in mind? <br /> Let&apos;s get in touch.
          </h1>
        </div>
        {submitted ? (
          <>
            <h1 className="text-center md:text-[28px] md:w-[60%] mx-auto">
              Thank you for contacting me! I will be sure to respond as soon as
              possible.
            </h1>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center md:gap-20 gap-10 md:w-[80%] w-[90%] mx-auto"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 w-full">
              <div className="flex flex-col items-center w-[100%]">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="What is your name *"
                  className="border-b-2 border-black focus:outline-none h-[50px] w-full font-dm"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col items-center w-[100%]">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email address *"
                  className="border-b-2 border-black focus:outline-none h-[50px] w-full font-dm"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project *"
                className="w-full h-[100px] focus:outline-none border-b-2 border-black font-dm"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{ width: "15em" }}
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span className="text-white">
                  <h1>Submitting...</h1>
                </span>
              ) : (
                <span className="btn-title">
                  <h1>Submit</h1>
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
