import React from "react";
import { Link } from "react-router-dom";
import { FcDownload } from "react-icons/fc";

export default function Catalogue() {
  return (
    <div className="mx-2">
      <div className="space-y-10 mb-4">
        <div className="ml-20 mt-14 text-md hidden lg:block">
          <Link to={"/home"} className="hover:underline text-gray-600">
            Home
          </Link>
          <span> > </span>
          <span> Catalogue </span>
        </div>
        <h1 className="text-4xl font-semibold font-serif text-center mt-10 my-5 text-[#1c3755]">
          CODING PATHSHALA BOOK CATALOGUE
        </h1>

        <hr className="w-[30%] m-auto mt-10" />
        <p className="text-[#bc6c25] text-center text-2xl font-semibold font-mono mt-10">
          Get Connected And Stay Connected
        </p>
        <hr className="w-[30%] m-auto mt-10" />
        <p className="text-center text-gray-400 xm:text-md lg:text-lg font-mono font-semibold my-5">
          Dear visitor your requirments/suggetions are important to us. <br />{" "}
          Please feel free to call us on below number and ask for the respective
          extentions
        </p>
        <p className="text-center text-[#af7352] font-bold text-xl  my-7 ">
          05624308606
        </p>

        <div className="lg:flex justify-around">
          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="6-12.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Class 6-12</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif ">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <div>
              <img src="scholar.png" className="m-auto" />
            </div>
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">
              Books For Olympiads & Scholarship
            </p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="admission.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">
              Books For College Admission
            </p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="teaching.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Teaching</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-around">
          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="engineering.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto  mb-5" />
            <p className="text-[#975938] text-lg">Books For Engineering</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <div>
              <img src="medical.png" className="m-auto" />
            </div>
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Medical</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="banking.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Banking</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="ssc_1.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For SSC</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-around">
          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="engineering.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Railways</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <div>
              <img src="defence.png" className="m-auto" />
            </div>
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">PMT IIT Foundation Defence</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="teaching.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For Government Exam</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>

          <div
            className="text-center border-2 border-gray-200 w-[80%] m-auto lg:w-[20%] py-10 bg-[#f2e9e4] hover:shadow-lg hover:shadow-
            [#83492a] rounded"
          >
            <img src="upsc.png" className="m-auto" />
            <hr className="w-[90%] mt-5 m-auto mb-5" />
            <p className="text-[#975938] text-lg">Books For UPSC Defence</p>
            <div className="flex items-center justify-center p-1 rounded my-3">
              <FcDownload />
              <button className="text-lg font-serif">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
