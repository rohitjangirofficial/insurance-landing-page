"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

const Plans = () => {
  return (
    <section className="mx-auto my-20 flex w-[90%] flex-col items-center justify-center gap-12 sm:w-[80%]">
      <h2
        style={{
          wordSpacing: "0px",
          fontSize: "clamp(2.25rem, 1rem + 3.125vw, 3rem)",
        }}
        className="text-center font-extrabold text-slate-800"
      >
        <span className="text-[#ffbd4d]">Explore</span>{" "}
        <span className="text-[#25b884]">Safest Plan</span> For You & Your
        Family
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card-1 */}
        <Tilt
          style={{
            boxShadow: "#dfe0e4 -4px 4px",
          }}
          className="w-[calc(100%_/_1_-_(32px_*_0_/_1))] rounded-2xl bg-white p-10 sm:w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/health-insurance.png"
              height={75}
              width={75}
              alt="Health Insurance"
            />
            <p className="text-center text-2xl font-bold">Health Insurance</p>
            <span className="text-center font-medium text-gray-500">
              Health insurance provides coverage for medical expenses, ensuring
              you receive the necessary care without the financial burden.
            </span>
          </div>
        </Tilt>

        {/* Card-1 */}

        <Tilt
          style={{
            boxShadow: "#dfe0e4 -4px 4px",
          }}
          className="w-[calc(100%_/_1_-_(32px_*_0_/_1))] rounded-2xl bg-white p-10 sm:w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/home-insurance.png"
              height={75}
              width={75}
              alt="home insurance"
            />
            <p className="text-center text-2xl font-bold">Home Insurance</p>
            <span className="text-center font-medium text-gray-500">
              Home insurance protects your property and personal belongings
              against risks such as fire, theft, vandalism, and natural
              disasters.
            </span>
          </div>
        </Tilt>

        {/* Card-1 */}
        <Tilt
          style={{
            boxShadow: "#dfe0e4 -4px 4px",
          }}
          className="w-[calc(100%_/_1_-_(32px_*_0_/_1))] rounded-2xl bg-white p-10 sm:w-[calc(100%_/_2_-_(32px_*_1_/_2))] lg:w-[calc(100%_/_3_-_(32px_*_2_/_3))]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/pet-insurance.png"
              height={75}
              width={75}
              alt="pet insurance"
            />
            <p className="text-center text-2xl font-bold">Pet Insurance</p>
            <span className="text-center font-medium text-gray-500">
              This type of insurance ensures that you can provide the best
              possible care for your pets without worrying about high medical
              costs.
            </span>
          </div>
        </Tilt>
      </div>

      <button
        style={{
          boxShadow: "#dfe0e4 -4px 4px",
        }}
        className="rounded-xl bg-[#25b884] px-4 py-2.5 font-bold text-white"
      >
        Explore More
      </button>
    </section>
  );
};

export default Plans;
