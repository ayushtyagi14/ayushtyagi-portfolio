"use client";
import React, { useState } from "react";
import { dmSans } from "../../app/layout";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section className="mt-24 md:mt-28" id="contact">
      {/* Background: layered diagonals + spotlights */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(900px_300px_at_50%_0%,#AED6F1,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background:conic-gradient(from_90deg_at_50%_20%,rgba(0,0,0,0.12),transparent_40%,rgba(0,0,0,0.12)_70%,transparent_100%)]" />
      </div>

      <div className="relative md:w-[82%] w-[92%] mx-auto">
        {/* Cut-card silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border-2 border-[#2b2b2b] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]"
        >
          {/* angled bands */}
          <div className="absolute -top-10 -right-16 h-64 w-64 rotate-[18deg] rounded-3xl bg-[#AED6F1]/50 blur-2xl" />
          <div className="absolute -bottom-16 -left-12 h-64 w-64 -rotate-[12deg] rounded-3xl bg-[#AED6F1]/40 blur-2xl" />

          <div className="relative px-6 md:px-10 py-12 md:py-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-6">
              <span
                className={`bg-[#AED6F1] text-[20px] py-2 px-6 border-2 border-[#2b2b2b] text-[#2b2b2b] rounded-full ${dmSans.className} font-extrabold uppercase shadow-[0_8px_24px_rgba(174,214,241,0.55)]`}
              >
                Contact Me
              </span>
              <h1 className="lg:text-[50px] md:text-[40px] text-[28px] text-center font-bold leading-tight text-[#2b2b2b]">
                Got a project in mind? <br /> Let&apos;s get in touch.
              </h1>
            </div>

            {/* Form */}
            <form
              action="https://formsubmit.co/ayush.tyagi145@gmail.com"
              method="POST"
              onSubmit={() => setSubmitting(true)}
              className="mt-10 md:mt-12"
            >
              {/* Hidden config */}
              <input type="hidden" name="_cc" value="hello@ayushtyagi.com" />
              <input
                type="hidden"
                name="_next"
                value="https://ayushtyagi.com/"
              />
              <input
                type="hidden"
                name="_subject"
                value="New portfolio inquiry"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for reaching out to Ayush. This is a quick confirmation that the message has been received. Expect a reply soon."
              />
              <input type="text" name="_honey" className="hidden" />
              <input
                type="hidden"
                name="_blacklist"
                value="viagra, loan, crypto scam, seo service"
              />

              {/* Glass inputs */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-[#2b2b2b]/5 backdrop-blur-sm" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="What is your name *"
                    className={`relative z-10 w-full h-[56px] rounded-xl px-4 border-2 border-black/80 focus:outline-none bg-transparent ${dmSans.className}`}
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-[#2b2b2b]/5 backdrop-blur-sm" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address *"
                    className={`relative z-10 w-full h-[56px] rounded-xl px-4 border-2 border-black/80 focus:outline-none bg-transparent ${dmSans.className}`}
                  />
                </div>
              </div>

              <div className="relative mt-6 md:mt-8">
                <div className="absolute inset-0 rounded-2xl bg-[#2b2b2b]/5 backdrop-blur-sm" />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project *"
                  className={`relative z-10 w-full min-h-[140px] md:min-h-[170px] rounded-2xl p-4 border-2 border-black/80 focus:outline-none bg-transparent ${dmSans.className}`}
                />
              </div>

              {/* Submit */}
              <div className="mt-8 md:mt-10 flex justify-center">
                <button
                  type="submit"
                  className="btn"
                  style={{ width: "15em" }}
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="text-white">
                      <h1>Submitting...</h1>
                    </span>
                  ) : (
                    <span className="btn-title">
                      <h1>Submit</h1>
                    </span>
                  )}
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#2b2b2b]/40 via-[#2b2b2b]/60 to-transparent" />
            </form>
          </div>

          {/* Cut diagonal footer edge */}
          <div className="absolute bottom-0 left-0 right-0 h-10 [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)] bg-[#2b2b2b]/5" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
