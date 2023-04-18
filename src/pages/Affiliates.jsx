import React from "react";

export default function Affiliates() {
  return (
    <div className="mx-2">
      <img src="affiliates.png" className="m-auto mt-10" />
      <h1 className="text-center font-serif font-semibold text-4xl text-[#725138] my-4">
        Influence The Students
      </h1>

      <p className="text-center font-mono text-lg text-[#8f8f6d]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
        aperiam sit totam excepturi fugit ipsa <br />
        optio perferendis officiis repellat nemo ullam explicabo cumque
        perspiciatis, dolorem cum voluptatem <br />
        error vitae distinctio!
      </p>
      <hr className="w-[30%] m-auto mt-10" />
      <p className="text-center font-serif font-semibold text-lg text-[#a09963] my-4">
        For Collaborations, Reach Out To Us :{" "}
      </p>
      <hr className="w-[30%] m-auto mt-5 my-8" />

      <di2 className="bg-[#efefd0] flex w-[90%] m-auto justify-center space-x-4 my-8 py-5">
        <div className="w-[45%] p-3">
          <p className="text-sm md:text-lg font-serif ">First Name </p>
          <input
            type="text"
            className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
          />
          <p className="text-sm md:text-lg font-serif ">Email Id </p>
          <input
            type="email"
            className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
          />
          <p className="text-sm md:text-lg font-serif ">Mobile No. </p>
          <input
            type="tel"
            className=" w-full  my-2 p-2 outline-none text-lg shadow-md shadow-gray-300"
          />
          <button className="border-2 border-gray-200 rounded p-2 px-8 my-4 bg-[#c59c87] text-white">
            SEND
          </button>
        </div>
        <div className="w-[45%] p-3 space-y-2">
          <p className="text-sm md:text-lg font-serif ">Your Message </p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="w-full shadow-md shadow-gray-300 text-lg outline-none"
          ></textarea>
        </div>
      </di2>
    </div>
  );
}
