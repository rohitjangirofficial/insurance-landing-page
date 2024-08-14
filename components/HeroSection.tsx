"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  return (
    <>
      <section className="my-4 flex flex-col items-center justify-center gap-4 p-6">
        <h2
          style={{
            wordSpacing: "0px",
            fontSize: "clamp(2.25rem, 1rem + 3.125vw, 3rem)",
          }}
          className="text-center font-extrabold text-slate-800"
        >
          For The Happy Life <br /> Join A{" "}
          <span className="text-[#ffbd4d]">Trustable</span>{" "}
          <span className="text-[#25b884]">Insurance</span>
        </h2>
        <p className="my-4 text-center font-medium text-gray-500">
          Our Reliable Insurance Services Are Designed To Safeguard You And Your
          Loved Ones Against Life&apos;s Uncertainties. <br />
          With Comprehensive Coverage Options & Personalized Plans, You Can Rest
          Assured That Your Health, Home & Future Are In Good Hands.
        </p>
        <Image
          src="/hero-image.png"
          width={2431}
          height={1035}
          alt="Hero Image"
        />
        <div className="ratings mt-4 flex flex-col items-center justify-center gap-4">
          <div className="stars flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex gap-4">
              <Star fill="#ffbd4d" stroke="#ffbd4d" />
              <Star fill="#ffbd4d" stroke="#ffbd4d" />
              <Star fill="#ffbd4d" stroke="#ffbd4d" />
              <Star fill="#ffbd4d" stroke="#ffbd4d" />
              <Star fill="#ffbd4d" stroke="#ffbd4d" />
            </div>
            <span className="font-medium text-gray-500">
              10K + 4.8 Star Rating
            </span>
          </div>
          <button className="rounded-xl border-2 border-[#25b884] bg-white px-4 py-1.5 font-bold">
            Read Client Feedback
          </button>
        </div>
      </section>

      {/* Stats */}

      <section
        className="stats mx-auto my-4 flex w-[90%] flex-wrap justify-center gap-4 rounded-2xl bg-white p-4 sm:w-[80%] sm:gap-8 sm:p-8"
        style={{
          boxShadow: "#dfe0e4 -4px 4px",
        }}
      >
        {/* Card-1 */}
        <div className="w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))] xl:w-[calc(100%_/_4_-_(32px_*_3_/_4))]">
          <Tilt>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#abc8fd] bg-[#e7eeff] p-3 text-center">
              <Image
                src="/happy-customer.png"
                height={65}
                width={65}
                alt="happy customer"
              />
              <p className="text-2xl font-extrabold text-[#0b65ff]">10K+</p>
              <span className="mt-[-6px] text-lg font-semibold text-black">
                Happy Customer
              </span>
            </div>
          </Tilt>
        </div>

        {/* Card-2 */}
        <div className="w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))] xl:w-[calc(100%_/_4_-_(32px_*_3_/_4))]">
          <Tilt>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#b3edff] bg-[#e8f8fe] p-3 text-center">
              <Image
                src="/overall-satisfaction.png"
                height={65}
                width={65}
                alt="overall satisfaction"
              />
              <p className="text-2xl font-extrabold text-[#17c7fe]">4.8+</p>
              <span className="mt-[-6px] text-lg font-semibold text-black">
                Overall Satisfaction
              </span>
            </div>
          </Tilt>
        </div>

        {/* Card-3 */}
        <div className="w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))] xl:w-[calc(100%_/_4_-_(32px_*_3_/_4))]">
          <Tilt>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#bce7c4] bg-[#edf9f0] p-3 text-center">
              <Image
                src="/awards-achivement.png"
                height={65}
                width={65}
                alt="awards achivement"
              />
              <p className="text-2xl font-extrabold text-[#50c171]">120+</p>
              <span className="mt-[-6px] text-lg font-semibold text-black">
                Awards Achivement
              </span>
            </div>
          </Tilt>
        </div>

        {/* Card-4 */}
        <div className="w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))] xl:w-[calc(100%_/_4_-_(32px_*_3_/_4))]">
          <Tilt>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#ffd0a4] bg-[#fff2e7] p-3 text-center">
              <Image
                src="/insurance-holder.png"
                height={65}
                width={65}
                alt="insurance holder"
              />
              <p className="text-2xl font-extrabold text-[#fe7b00]">8.5K+</p>
              <span className="mt-[-6px] text-lg font-semibold text-black">
                Insurance Holder
              </span>
            </div>
          </Tilt>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
