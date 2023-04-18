import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="m-10">
      <div className="hidden lg:block ml-20 mt-14 text-md">
        <Link to={"/home"} className="hover:underline text-gray-600">
          Home
        </Link>
        <span> &#62; </span>
        <Link to={"/our-products"} className="hover:underline text-gray-600">
          Our Products
        </Link>
        <span> &#62; </span>
        <span> Books </span>
      </div>

      <div className=" lg:w-[65%] m-auto border-2 space-x-4 border-gray-600 my-10 pb-4 ">
        <div className="lg:flex justify-between items-center hidden  w-full  px-5">
          <p>Items 1-12 of 225</p>
          <div className="flex space-x-3 items-center">
            <p className="font-medium text-gray-700 text-lg">Sort By</p>
            <select className="border-2 border-gray-600 font-medium rounded-3xl my-5 p-2 text-gray-700 outline-none">
              <option>Position</option>
              <option>Product Name</option>
              <option>Price</option>
              <option>Read Sample Chapter</option>
            </select>
          </div>
        </div>

        {/* <hr className=" hidden lg:block h-[2px] bg-gray-700" /> */}
        <div className="flex  flex-wrap ">
          <div className="  border-2 border-gray-700  ">
            <div className=" bg-blue-400  m-4">
              <img
                src="book1.jpg"
                alt=""
                className="w-[150px] h-[200px] py-2 px-3 m-auto"
              />
            </div>
            <p className="text-center font-semibold md:text-inherit xm:text-[14px]  ">
              Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha -
              JE/NTPC/ALP/
              <br /> Group D - 2nd Edition
            </p>
            <div className="w-[40%] m-auto space-y-4">
              <button className="text-[10px] font-bold text-center bg-yellow-300 px-2  rounded-md   ">
                ADD TO CART
              </button>
              <br />
              <button className="text-[10px] font-bold text-center p-2  rounded-md border border-gray-300  ">
                QUICK VIEW
              </button>
            </div>
          </div>

          <div className="  border-2 border-gray-700  ">
            <div className=" bg-blue-400  m-4">
              <img
                src="book1.jpg"
                alt=""
                className="w-[150px] h-[200px] py-2 px-3 m-auto"
              />
            </div>
            <p className="text-center font-semibold md:text-inherit xm:text-[14px]  ">
              Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha -
              JE/NTPC/ALP/
              <br /> Group D - 2nd Edition
            </p>
            <div className="w-[40%] m-auto space-y-4">
              <button className="text-[10px] font-bold text-center bg-yellow-300 px-2  rounded-md   ">
                ADD TO CART
              </button>
              <br />
              <button className="text-[10px] font-bold text-center p-2  rounded-md border border-gray-300  ">
                QUICK VIEW
              </button>
            </div>
          </div>

          <div className="  border-2 border-gray-700  ">
            <div className=" bg-blue-400  m-4">
              <img
                src="book1.jpg"
                alt=""
                className="w-[150px] h-[200px] py-2 px-3 m-auto"
              />
            </div>
            <p className="text-center font-semibold md:text-inherit xm:text-[14px]  ">
              Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha -
              JE/NTPC/ALP/
              <br /> Group D - 2nd Edition
            </p>
            <div className="w-[40%] m-auto space-y-4">
              <button className="text-[10px] font-bold text-center bg-yellow-300 px-2  rounded-md   ">
                ADD TO CART
              </button>
              <br />
              <button className="text-[10px] font-bold text-center p-2  rounded-md border border-gray-300  ">
                QUICK VIEW
              </button>
            </div>
          </div>
          <div className="  border-2 border-gray-700  ">
            <div className=" bg-blue-400  m-4">
              <img
                src="book1.jpg"
                alt=""
                className="w-[150px] h-[200px] py-2 px-3 m-auto"
              />
            </div>
            <p className="text-center font-semibold md:text-inherit xm:text-[14px]  ">
              Samanya Vigyan for <br /> Bhartiya Railways RRB <br /> Pariksha -
              JE/NTPC/ALP/
              <br /> Group D - 2nd Edition
            </p>
            <div className="w-[40%] m-auto space-y-4">
              <button className="text-[10px] font-bold text-center bg-yellow-300 px-2  rounded-md   ">
                ADD TO CART
              </button>
              <br />
              <button className="text-[10px] font-bold text-center p-2  rounded-md border border-gray-300  ">
                QUICK VIEW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 space-x-3 items-center justify-center mb-10">
        <p className="h-8 w-10 text-center font-semibold bg-yellow-300 rounded-md text-white shadow-xl shadow-yellow-300 ">
          &#60;
        </p>
        &nbsp;
        <p className="h-8 w-10 text-center font-semibold bg-blue-600 rounded-md text-white shadow-xl shadow-blue-300 ">
          1
        </p>
        <p className="h-8 w-10 text-center font-semibold bg-blue-600 rounded-md text-white shadow-xl shadow-blue-300 ">
          2
        </p>
        <p className="h-8 w-10 text-center font-semibold bg-blue-600 rounded-md text-white shadow-xl shadow-blue-300 ">
          3
        </p>
        <p className="h-8 w-10 text-center font-semibold bg-blue-600 rounded-md text-white shadow-xl shadow-blue-300 ">
          4
        </p>
        <p className="h-8 w-10 text-center font-semibold bg-blue-600 rounded-md text-white shadow-xl shadow-blue-300 ">
          5
        </p>
        &nbsp;
        <p className="h-8 w-10 text-center font-semibold bg-yellow-300 rounded-md text-white  shadow-xl shadow-yellow-300 ">
          &#62;
        </p>
      </div>
    </div>
  );
}
