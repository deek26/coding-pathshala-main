import React from "react";
import { Link } from "react-router-dom";
import { GrMap } from "react-icons/gr";

export default function Trackyourorder() {
  return (
    <>
      <div className="lg:m-[100px] m-4 ">
        <div className="hidden lg:block">
          <Link to={"/"} className="hover:underline p-5 text-gray-500">
            Home
          </Link>
          <span>&#62;</span>

          <span className="px-5">Track Your Order</span>
        </div>
        
        <h1 className=" hidden md:block text-center text-4xl font-semibold text-gray-900">
          Tracking
        </h1>

        <div className=" lg:shadow-lg my-8 p-5 lg:border lg:border-gray-300 rounded-md">
          <div className="flex items-center space-x-4">
            <GrMap className="text-4xl" />
            <p className="lg:text-2xl md:text-md xm:text-sm">
              Track status of your shipment
            </p>
          </div>
          <hr className="my-4 " />
          <div className="lg:flex space-x-4">
            <p className="xm:hidden lg:block">Search By :</p>
            <input type="radio" name="order" />
            <span className="xm:text-[14px] lg:text-md font-medium">
              Order ID
            </span>
            <br className="xm:block lg:hidden" />
            <input type="radio" name="order" />
            <span className="xm:text-[14px] lg:text-md font-medium">AWB</span>
          </div>
          <input
            type="text"
            placeholder=" order Id "
            className="p-2 w-full lg:w-[60%] border-2 border-gray-400 
                    rounded px-4 mt-4 xm:text-[14px] lg:text-md"
          />
          <br />
          <input
            type="tel"
            placeholder="Mobile no."
            className="p-2 w-full lg:w-[60%] border-2 border-gray-400 
                    rounded px-4 mt-4 xm:text-[14px] lg:text-md"
          />{" "}
          <br />
          <button className="bg-blue-900 text-white font-semibold py-2 px-8 my-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
