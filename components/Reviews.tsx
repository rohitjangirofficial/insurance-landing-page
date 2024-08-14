import { Star } from "lucide-react";
import React from "react";

const Reviews = () => {
  return (
    <section className="mx-auto my-20 flex w-[80%] flex-col items-center justify-center gap-12">
      <h2
        style={{
          wordSpacing: "0px",
        }}
        className="text-center text-5xl font-extrabold leading-[60px] tracking-[0px] text-slate-800"
      >
        <span className="text-[#ffbd4d]">Know</span>{" "}
        <span className="text-[#25b884]">More</span> From Our Well-wishers
      </h2>

      <div className="flex gap-8">
        {/* Card-1 */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-8">
          <div className="stars flex gap-4">
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
          </div>
          <p className="font-medium text-black">
            Signing up for insurance through this website was the best decision
            I made for my family. The process was straightforward & the customer
            support team was incredibly helpful in explaining all the coverage
            options. I feel secure knowing we have comprehensive protection.
            Highly recommended!
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <div>
              <p className="text-base font-semibold">James Dev</p>
              <span className="font-medium text-gray-500">
                President, Hamim Global Inc
              </span>
            </div>
          </div>
        </div>

        {/* Card-2 */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-8">
          <div className="stars flex gap-4">
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
            <Star fill="#ffbd4d" stroke="#ffbd4d" />
          </div>
          <p className="font-medium text-black">
            Finding home insurance that offered both reliability and
            affordability seemed impossible until I used this website. The
            comparison tools and detailed information helped me choose the best
            policy for my home. The customer service was fantastic, guiding me
            through every step.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
              className="h-[50px] w-[50px] rounded-full object-cover"
            />
            <div>
              <p className="text-base font-semibold">Sohaib Muhmmad</p>
              <span className="font-medium text-gray-500">
                President, Hamim Global Inc
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-8 border-2 border-red-400">
        {/* Card-1 */}
        <div className="flex w-[100%] items-center gap-3 rounded-2xl border-2 border-green-400 bg-white p-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">Patricia Sanders</p>
            <span className="font-medium text-gray-500">
              Marketing Coordinator
            </span>
          </div>
        </div>
        {/* Card-2 */}
        <div className="flex w-[100%] items-center gap-3 rounded-2xl border-2 border-purple-400 bg-white p-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">Eddie Lake</p>
            <span className="font-medium text-gray-500">Medical Assistant</span>
          </div>
        </div>
        {/* Card-3 */}
        <div className="flex w-[100%] items-center gap-3 rounded-2xl border-2 border-blue-400 bg-white p-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">James Parker</p>
            <span className="font-medium text-gray-500">Medical Assistant</span>
          </div>
        </div>
        {/* Card-4 */}
        <div className="flex w-[100%] items-center gap-3 rounded-2xl border-2 border-orange-400 bg-white p-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">John Doe</p>
            <span className="font-medium text-gray-500">Medical Assistant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
