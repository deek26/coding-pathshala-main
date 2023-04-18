import React from "react";
import { Link } from "react-router-dom";

export default function Requestforspecimen() {
  return (
    <div className="m-10">
      <div>
        <div className="hidden lg:block">
          <Link to={"/"} className="hover:underline px-5 text-gray-500">
            Home
          </Link>
          <span>&#62;</span>

          <span className="px-5 xm:text-sm lg:text-md">
            Request for Specimen
          </span>
        </div>

        <h1 className="text-center text-4xl font-semibold">
          Request for Specimen
        </h1>

        <div className="  lg:flex  justify-around  my-10">
          <div className="space-y-2 text-lg  xm:w-full lg:w-[40%]">
            <p className="p-2">First Name :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Email Id :</p>
            <input
              type="email"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Address :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Subject of Teaching :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Institute name :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Book name recommending presently:</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />
          </div>
          <div className="  space-y-2 text-lg  xm:w-full lg:w-[40%]  ">
            <p className="p-2">Last Name :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />

            <p className="p-2">Contact :</p>
            <input
              type="tel"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />
            <p className="p-2">Pincode :</p>
            <input
              type="tel"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />
            <p className="p-2">Number of Students Teaching Presently :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />
            <p className="p-2">Institute Address :</p>
            <input
              type="text"
              className="border-[2px] border-gray-300 p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="xm:my-20 md:m-0 md:text-center ">
          <p className="text-2xl font-mono font-semibold text-[#1c3755]">
            Prodution Information
          </p>

          <div className="  lg:flex  justify-around  my-10">
            <div className="  space-y-2 text-lg  xm:w-full lg:w-[40%]  ">
              <p className="p-2 font-serif"> Name of Books :</p>
              <input
                type="text"
                className="border-[2px] border-gray-300 p-2 w-full rounded"
              />
              <p className="p-2 font-serif"> Author Name :</p>
              <input
                type="text"
                className="border-[2px] border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="  space-y-2 text-lg  xm:w-full lg:w-[40%]  ">
              <p className="p-2 font-serif"> ISBN :</p>
              <input
                type="text"
                className="border-[2px] border-gray-300 p-2 w-full rounded"
              />
              <p className="p-2 font-serif">
                {" "}
                How did you get to know about this product :
              </p>
              <input
                type="text"
                className="border-[2px] border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>
          <br />
          <div className="text-center">
            <button className="py-2 px-7 bg-blue-900 text-white font-serif font-semibold rounded hover:shadow-md">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
