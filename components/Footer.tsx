import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 sm:p-8 lg:p-16">
      <div className="flex w-full flex-wrap">
        {/* -------- */}
        <div className="w-[100%] p-4 sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%]">
          <img src="/logo.png" alt="logo" />
          <p className="mt-3 text-base font-semibold text-gray-500">
            Our reliable insurance services are designed to safeguard you and
            your loved ones against life&apos;s uncertainties.
          </p>
        </div>
        {/* -------- */}
        <div className="flex w-[100%] flex-col gap-4 p-4 sm:w-[50%] md:w-[33.33%] lg:w-[25%] lg:pl-16 xl:w-[20%]">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-500">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media Kit</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* -------- */}
        <div className="flex w-[100%] flex-col gap-4 p-4 sm:w-[50%] md:w-[33.33%] lg:w-[25%] lg:pl-16 xl:w-[20%]">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-500">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        {/* -------- */}
        <div className="flex w-[100%] flex-col gap-4 p-4 sm:w-[50%] md:w-[33.33%] lg:w-[25%] lg:pl-16 xl:w-[20%]">
          <h3 className="text-lg font-semibold">Social</h3>
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-500">
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngleList</li>
            <li>Dribble</li>
          </ul>
        </div>
        {/* -------- */}
        <div className="flex w-[100%] flex-col gap-4 p-4 sm:w-[50%] md:w-[33.33%] lg:w-[25%] lg:pl-16 xl:w-[20%]">
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-500">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* bottom */}
      <div className="mx-[-16px] mb-[-16px] mt-[16px] flex h-[100px] items-center justify-center bg-gray-200 sm:mx-[-32px] sm:mb-[-32px] sm:mt-[32px] lg:mx-[-64px] lg:mb-[-64px] lg:mt-[64px]">
        <span className="text-center font-medium text-gray-500">
          &#169; 2024 helloasarkar | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
