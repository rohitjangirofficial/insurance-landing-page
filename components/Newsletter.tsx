import { Newspaper } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section
      className="flex h-[600px] flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url(/newsletter-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h2
          style={{
            wordSpacing: "0px",
            fontSize: "clamp(2.25rem, 1rem + 3.125vw, 3rem)",
            WebkitTextStrokeWidth: "1.5px",
            WebkitTextStrokeColor: "white",
          }}
          className="text-center font-extrabold text-slate-800"
        >
          Upgrade Your Knowlegde By
        </h2>
        <h2
          style={{
            wordSpacing: "0px",
            fontSize: "clamp(2.25rem, 1rem + 3.125vw, 3rem)",
            WebkitTextStrokeWidth: "1.5px",
            WebkitTextStrokeColor: "white",
          }}
          className="text-center font-extrabold text-slate-800"
        >
          <span className="text-[#25b884]">Subscribe Our</span>{" "}
          <span className="text-[#ffbd4d]">Newsletter</span>
          <Newspaper
            size={40}
            className="mb-1 ml-2 inline-block text-[#25b884]"
          />
        </h2>
        {/* <div className="mt-4 flex flex-col w-full justify-between rounded-2xl bg-white py-4 pl-8 pr-4 shadow-lg"> */}
        <div className="mt-4 flex w-full flex-col justify-between gap-6 rounded-2xl bg-white p-6 shadow-lg focus-within:shadow-2xl sm:flex-row">
          <input
            type="text"
            placeholder="Enter your email address"
            className="h-full w-full font-medium outline-none transition-all"
          />
          <button
            style={{
              boxShadow: "#dfe0e4 -4px 4px",
            }}
            className="w-full rounded-xl bg-[#25b884] px-6 py-3 font-bold text-white sm:w-[200px]"
          >
            Submit Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
