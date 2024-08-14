import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mx-auto mt-8 flex h-[70px] w-[90%] sm:w-[80%] items-center justify-between rounded-2xl bg-white px-4">
      <div>
        <Image src="/logo.png" height={50} width={150} alt="site-logo" />
      </div>
      {/* <div className="">
        <ul className="text-base flex gap-8 font-medium text-gray-500">
          <li className="font-semibold text-black">Home</li>
          <li>About</li>
          <li>Insurance</li>
          <li>Blogs</li>
          <li>Support</li>
        </ul>
      </div> */}
      <div>
        <button
          style={{
            boxShadow: "#dfe0e4 -4px 4px",
          }}
          className="rounded-xl bg-[#25b884] px-4 py-2.5 font-bold text-white"
        >
          Contact Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
