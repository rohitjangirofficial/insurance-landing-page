import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto my-20 flex w-[90%] flex-col items-center justify-center gap-12 sm:w-[80%]">
      <h2
        style={{
          wordSpacing: "0px",
          fontSize: "clamp(2.25rem, 1rem + 3.125vw, 3rem)",
        }}
        className="text-center font-extrabold text-slate-800"
      >
        <span className="text-[#ffbd4d]">Have</span>{" "}
        <span className="text-[#25b884]">Any Doubt?</span> Contact With Our Team
      </h2>

      <div
        style={{
          boxShadow: "#dfe0e4 -4px 4px",
        }}
        className="flex max-h-[575px] w-full gap-8 rounded-2xl bg-white p-4 sm:p-8"
      >
        {/* Card-1 */}
        <div className="flex w-full flex-col items-start gap-4">
          <form className="flex w-full flex-col items-start gap-4 rounded-2xl bg-[#eef1f4] p-4 sm:p-8">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold sm:text-base"
              >
                Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Write your full name"
                className="w-full rounded-xl border-[1px] border-gray-300 px-5 py-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-semibold sm:text-base"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Type of problem you're facing"
                className="w-full rounded-xl border-[1px] border-gray-300 px-5 py-4 text-sm sm:text-base"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="problem"
                className="text-sm font-semibold sm:text-base"
              >
                Name
              </label>
              <textarea
                id="problem"
                placeholder="Write in details about your problem"
                className="min-h-[150px] w-full resize-y rounded-xl border-[1px] border-gray-300 px-5 py-4 text-sm sm:text-base"
              />
            </div>
          </form>
          <button
            style={{
              boxShadow: "#dfe0e4 -4px 4px",
            }}
            className="rounded-xl bg-[#25b884] px-6 py-3 font-bold text-white"
          >
            Submit Now
          </button>
        </div>
        {/* Card-2 */}
        <div className="hidden w-full lg:block">
          <Image
            src="/contact.png"
            width={525}
            height={453}
            alt="contact"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
