import React from "react";
import { Link } from "react-router-dom";

export default function Connectus() {
  return (
    <>
      <div className="bg-[#ede0d4] pb-20 py-10">
        <div className="hidden lg:block">
          <Link to={"/"} className="hover:underline px-5 text-white font-bold">
            Home
          </Link>
          <span> &#62;</span>

          <span className="px-5">Connect Us</span>
        </div>

        <h1 className="text-center text-3xl font-semibold"> Connect Us</h1>

        <p className="text-center text-blue-900 font-bold mt-[50px] text-lg">
          Get connected and stay connected
        </p>
        <p className="text-center mt-4 px-2">
          Dear visitor your requirments/suggetions are important to us. Please
          feel free to call us on below number and ask for the respective
          extentions
        </p>
        <p className="text-center font-bold text-blue-900 ">05624305606</p>

        <div>
          <div className=" lg:flex justify-evenly py-8 xm:space-y-3 lg:space-y-0">
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9] xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="bulkbooks.png" alt="bulk books" />
              <p className="text-center">
                Bulk Books Order <br />
                Ext. no. 106
              </p>
              <p className="my-2 text-[5px]">Email id: sales3@aiets.co.in</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                     hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white "
            >
              <img src="studymaterial.png" alt="study material" />
              <p className="text-center">
                Study Material for Coaching Institutes
                <br />
                Ext. no. 150
              </p>
              <p className="my-2 text-[5px]">Email id: teamlead2@aiets.co.in</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="suggestions.png" alt="suggestions" />
              <p className="text-center">
                SUGGESTIONS or FEEDBACK of OUR PRODUCTS <br />
                Ext. no. 146
              </p>
              <p className="my-2 text-[5px]">
                Email id: feedback_disha@aiets.co.in
              </p>
            </div>
          </div>
          <div className="lg:flex justify-evenly py-8 xm:space-y-3 lg:space-y-0">
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="bulkbooks.png" alt="bulk books" />
              <p className="text-center">
                Bulk Books Order <br />
                Ext. no. 106
              </p>
              <p className="my-2 text-[5px]">Email id: sales3@aiets.co.in</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="studymaterial.png" alt="study material" />
              <p className="text-center">
                Study Material for Coaching Institutes
                <br />
                Ext. no. 150
              </p>
              <p className="my-2 text-[5px]">Email id: teamlead2@aiets.co.in</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="suggestions.png" alt="suggestions" />
              <p className="text-center">
                SUGGESTIONS or FEEDBACK of OUR PRODUCTS <br />
                Ext. no. 146
              </p>
              <p className="my-2 text-[5px]">
                Email id: feedback_disha@aiets.co.in
              </p>
            </div>
          </div>
          <div className="lg:flex justify-evenly py-8 xm:space-y-3 lg:space-y-0">
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="workwithus.png" alt="workwithus" />
              <p className="text-center">
                Work With Us <br />
                Ext. no. 147
              </p>
              <p className="my-2 text-[5px]">Email id: hr@aiets.co.in</p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded 
                    hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="findout.png" alt="findout" />
              <p className="text-center">
                Find out retailers near you
                <br />
                Ext. no. 127
              </p>
              <p className="my-2 text-[5px]">
                Email id: sales.support1@aiets.co.in
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center bg-[#ddbea9]  xm:w-[80%] xm:m-auto lg:w-[30%]  rounded
                      hover:shadow-2xl shadow-md py-10 space-y-4 font-semibold text-white"
            >
              <img src="advertise.png" alt="advertise" />
              <p className="text-center">
                Advertise with US <br />
                Ext. no. 109
              </p>
              <p className="my-2 text-[5px]">
                Email id: marketing2@aiets.co.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
